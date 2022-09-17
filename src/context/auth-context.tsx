import React, { ReactNode, useState, useContext } from "react";
import * as auth from 'auth-provider'
import { User } from "screens/project-list/search-panel";
import { http } from "utils/http"
import { useMount } from "utils";
import { useAsync } from "utils/use-async";
import { FullPageLoading } from "components/lib";
interface AuthForm {
    username: string,
    password: string
}
const bootstrapUser = async () => {
    let user = null
    const token = auth.getToken()
    if (token) {
        const data = await http('me', { token }) as any
        user = data.json()
    }
    return user
}
const AuthContext = React.createContext<{
    user: User | null,
    register: (form: AuthForm) => Promise<void>,
    login: (form: AuthForm) => Promise<void>,
    logout: () => Promise<void>,
} | undefined>(undefined)


export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [error, setError] = useState<boolean | null>(null)

    const login = (form: AuthForm) => auth.login(form).then(user => setUser(user))
    const register = (form: AuthForm) => auth.register(form).then(setUser)
    const logout = () => auth.logout().then(() => setUser(null))
    useMount(async () => {
        setError(true)
        await bootstrapUser().then(res => {
            setError(false)
            setUser(res.data)
        })

    })

    if (error) {
        return <FullPageLoading />
    }
    return <AuthContext.Provider children={children} value={{ user, login, register, logout }}></AuthContext.Provider>
}
export const UserAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth必须在AuthProvider中使用')
    }
    return context
}
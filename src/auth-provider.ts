import { User } from 'screens/project-list/search-panel'
const locaLStorageKey = '__auth_provider_token__'
const apiUrl = "http://localhost:8000"
export const getToken = () => window.localStorage.getItem(locaLStorageKey)
export const handleUserResponse = ({ user }: { user: User }) => {
    window.localStorage.setItem(locaLStorageKey, user.token || '')
    return user
}
//登入
export const login = (data: { username: string, password: string }) => {
    return fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(
        async (response: Response) => {
            if (response.ok) {
                return handleUserResponse(await response.json())
            } else {
                return Promise.reject(data)
            }
        }
    )
}
//注册
export const register = (data: { username: string, password: string }) => {
    return fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(
        async (response: Response) => {
            if (response.ok) {
                return handleUserResponse(await response.json())
            } else {
                return Promise.reject(data)
            }
        }
    )
}

// 注销
export const logout = async () => window.localStorage.removeItem(locaLStorageKey)
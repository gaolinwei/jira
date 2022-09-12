import { UserAuth } from "context/auth-context";
import React, { FormEvent, HtmlHTMLAttributes } from "react";
export const LoginScreen = () => {
    const apiUrl = "http://localhost:8000"
    const { login, user } = UserAuth()

    const handLeSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        login({ username, password })
    }


    return <form onSubmit={handLeSubmit}>
        {
            user ? <div>
                登入成功，用户名：{user?.name}
            </div> : null
        }
        <div>
            <label htmlFor="username">用户名</label>
            <input type="text" id={'username'} />
        </div>
        <div>
            <label htmlFor="password">密码</label>
            <input type="text" id={'password'} />
        </div>
        <button type={'submit'}>登录</button>
    </form>
}
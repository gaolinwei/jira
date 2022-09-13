import { UserAuth } from "context/auth-context";
import React, { FormEvent, HtmlHTMLAttributes } from "react";
export const RegisterScreen = () => {
    const apiUrl = "http://localhost:8000"
    const { register, user } = UserAuth()

    const handLeSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        register({ username, password })
    }


    return <form onSubmit={handLeSubmit}>
        <div>
            <label htmlFor="username">用户名</label>
            <input type="text" id={'username'} />
        </div>
        <div>
            <label htmlFor="password">密码</label>
            <input type="text" id={'password'} />
        </div>
        <button type={'submit'}>注册</button>
    </form>
}
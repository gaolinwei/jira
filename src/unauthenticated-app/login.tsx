import { UserAuth } from "context/auth-context";
import React, { FormEvent, HtmlHTMLAttributes } from "react";
import { Form, Input, Button } from "antd"
import { LongButton } from "./index"

export const LoginScreen = () => {
    const apiUrl = "http://localhost:8000"
    const { login, user } = UserAuth()

    const handLeSubmit = (valus: { username: string, password: string }) => {
        login(valus)
    }


    return <Form onFinish={handLeSubmit}>
        <Form.Item name={'username'} rules={[{ required: true, message: '请输入用户名' }]}>
            <Input placeholder={'用户名'} type="text" id={'username'} />
        </Form.Item>
        <Form.Item name={'password'} rules={[{ required: true, message: '请输入密码' }]}>
            <Input placeholder={'密码'} type="text" id={'password'} />
        </Form.Item>
        <Form.Item>
            <LongButton htmlType={'submit'} type={"primary"}>登录</LongButton>
        </Form.Item>
    </Form>
}
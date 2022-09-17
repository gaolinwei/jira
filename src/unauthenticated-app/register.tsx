import { UserAuth } from "context/auth-context";
import React, { FormEvent, HtmlHTMLAttributes } from "react";
import { Form, Input, Button } from "antd"
import { LongButton } from "./index"
export const RegisterScreen = ({ onError }: { onError: (error: Error) => void }) => {
    const apiUrl = "http://localhost:8000"
    const { register, user } = UserAuth()
    const handLeSubmit = async ({ cpassword, ...valus }: { username: string, password: string, cpassword: string }) => {
        if (cpassword !== valus.password) {
            return onError(new Error("请确认两次输入的密码相同"))
        }
        try {
            await register(valus)
        } catch (e: any) {
            onError(e)
        }
    }


    return <Form onFinish={handLeSubmit}>
        <Form.Item name={'username'} rules={[{ required: true, message: '请输入用户名' }]}>
            <Input placeholder={'用户名'} type="text" id={'username'} />
        </Form.Item>
        <Form.Item name={'password'} rules={[{ required: true, message: '请输入密码' }]}>
            <Input placeholder={'密码'} type="text" id={'password'} />
        </Form.Item>
        <Form.Item name={'cpassword'} rules={[{ required: true, message: '请确认密码' }]}>
            <Input placeholder={'确认密码'} type="text" id={'cpassword'} />
        </Form.Item>

        <Form.Item>
            <LongButton htmlType={'submit'} type={"primary"}>注册</LongButton>
        </Form.Item>
    </Form>
}
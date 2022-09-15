import React, { useState, useEffect } from "react"
import { Form, Input, Select } from 'antd'

export interface User {
    name: string,
    id: string,
    email: string,
    title: string,
    organization: string
    token: string
}

interface SearchPanelProps {
    users: User[],
    param: {
        name: string,
        personId: string
    },
    setParam: (param: SearchPanelProps['param']) => void;
}

export const SearchPanel = ({ param, setParam, users }: SearchPanelProps | any) => {
    return <Form style={{ marginBottom: '2rem' }} layout={"inline"}>
        <Form.Item>
            <Input placeholder="项目名" type="text" value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })} />
        </Form.Item>
        <Form.Item>
            <Select value={param.children} defaultValue={"请选择"} onChange={(value, param: any) => setParam({
                ...param,
                personId: value,
            })}>
                <Select.Option value={''}>请选择</Select.Option>
                {
                    users.map((v: User) => {
                        return <Select.Option key={v.id} value={v.id}>{v.name}</Select.Option>
                    })
                }
            </Select>
        </Form.Item>
    </Form>
}
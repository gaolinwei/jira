import React, { useState, useEffect } from "react"
import { Input, Select } from 'antd'

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
    return <form>
        <div>
            <Input type="text" value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })} />
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
        </div>
    </form>
}
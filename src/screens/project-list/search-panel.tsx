import React, { useState, useEffect } from "react"

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

export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
    return <form>
        <div>
            <input type="text" value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })} />
            <select value={param.name} onChange={e => setParam({
                ...param,
                personId: e.target.value
            })}>
                <option value={''}>请选择</option>
                <option value={''}>负责人</option>
                {
                    users.map((v, index) => <option value={v.id} key={v.id}>{v.name}</option>)
                }

            </select>
        </div>
    </form>
}
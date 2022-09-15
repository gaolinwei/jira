import React from "react"
import { Table } from 'antd'
import dayjs from "dayjs";
interface Project {
    id: string,
    name: string,
    personId: string,
    pin: boolean,
    organization: string,
    created: number;
}
interface User {
    name: string,
    id: string,
    email: string,
    title: string,
    organization: string
}
interface ListProps {
    list: Project[],
    users: User[]
}
export const List = ({ list, users }: ListProps) => {
    return <Table pagination={false} columns={[{
        title: '名称',
        dataIndex: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
        title: '部门',
        dataIndex: 'organization',
        sorter: (a, b) => a.name.localeCompare(b.name)
    }, {
        title: '负责人',
        render(value, project) {
            return <span>
                {users.find(user => user.id === project.personId)?.name || '未知'}
            </span>
        }
    },
    {
        title: "创建时间",
        render(value, project) {
            return <span>
                {project.created ? dayjs(project.created).format('YYYY-MM-DD') : '--'}
            </span>
        }
    }]} dataSource={list} />

}
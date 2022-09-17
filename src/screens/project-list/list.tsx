import React from "react"
import { Table, TableProps } from 'antd'
import dayjs from "dayjs";
export interface Project {
    id: string,
    name: string,
    personId: string,
    pin: boolean,
    organization: string,
    created: number;
    isLoading: boolean
}
interface User {
    name: string,
    id: string,
    email: string,
    title: string,
    organization: string,
}
interface ListProps extends TableProps<Project> {
    list: Project[],
    users: User[]
}

export const List = ({ list, users, loading }: ListProps) => {
    return <Table loading={loading} pagination={false} columns={[{
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
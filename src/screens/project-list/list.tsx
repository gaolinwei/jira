import React from "react"
interface Project{
    id:string,
    name:string,
    personId:string,
    pin:boolean,
    organization:string
}
interface User{
    name:string,
    id:string,
    email:string,
    title:string,
    organization:string
}
interface ListProps{
    list:Project[],
    users:User[]
}
export const List = ({ list, users }:ListProps) => {
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map((v, index) => {
                    return (
                        <tr key={index}>
                            <td>{v.name}</td>
                            <td>{users.find(user => user.id === v.personId)?.name || '未知'}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
}
import React from "react"
export const List = ({ list, users }) => {
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
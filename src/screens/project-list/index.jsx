import { SearchPanel } from "./search-panel"
import { List } from "./list"
import React, { useState, useEffect } from "react"
import { cleanObj } from '../../utils'
import * as qs from "qs"
const apiUrl = "http://localhost:8000"
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObj(param))}`).then(async (res) => {
            if (res.ok) {
                setList(await res.json())
            }
        })
    }, [param])
    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async (res) => {
            if (res.ok) {
                setUsers(await res.json())
            }
        })
    }, [])
    return <div>
        <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
        <List users={users} list={list} setList={setList}></List>
    </div>
}
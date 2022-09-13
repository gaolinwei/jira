import { SearchPanel } from "./search-panel"
import { List } from "./list"
import React, { useState, useEffect } from "react"
import { cleanObj, useMount, useDebounce } from '../../utils'
import * as qs from "qs"
import { useHttp } from "../../utils/http"
const apiUrl = "http://localhost:8000"
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])
    const debounceParam = useDebounce(param, 500)
    const client = useHttp()
    useEffect(() => {
        client('projects', { data: cleanObj(debounceParam) }).then(async (res: Response) => {
            console.log(res, "000000000000000000000");

            if (res.ok) {
                setList(await res.json())
            }
        })
    }, [debounceParam])
    useMount(() => {
        client('users').then(async (res: Response) => {
            if (res.ok) {
                setUsers(await res.json())
            }
        })
    })
    return <div>
        <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
        <List users={users} list={list}></List>
    </div>
}
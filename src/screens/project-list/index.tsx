import { SearchPanel } from "./search-panel"
import { List } from "./list"
import React, { useState, useEffect } from "react"
import { cleanObj, useMount, useDebounce } from '../../utils'
import * as qs from "qs"
import { useHttp } from "../../utils/http"
import styled from "@emotion/styled"
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
    return <Container>
        <h1>项目列表</h1>
        <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
        <List users={users} list={list}></List>
    </Container>
}
const Container = styled.div`
    padding: 3.2rem;
`
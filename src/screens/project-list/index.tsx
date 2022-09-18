import { SearchPanel } from "./search-panel"
import { List, Project } from "./list"
import React, { useState, useEffect } from "react"
import { cleanObj, useMount, useDebounce } from '../../utils'
import * as qs from "qs"
import { useHttp } from "../../utils/http"
import styled from "@emotion/styled"
import { Typography } from "antd"
import { useAsync } from "utils/use-async"
import { useUrlQueryParam } from "utils/url"
const apiUrl = "http://localhost:8000"
export const ProjectListScreen = () => {
    // const [setParam] = useState({
    //     name: '',
    //     personId: ''
    // })
    const [param, setParam] = useUrlQueryParam(['name', 'personId'])
    const [users, setUsers] = useState([])
    const debounceParam = useDebounce(param, 500)
    const [list, setList] = useState([])
    const client = useHttp()
    const { run, isLoading, error, data } = useAsync<Project[]>()
    useEffect(() => {
        run(client('projects', { data: cleanObj(debounceParam) })).then((res) => {
            setList(res)
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
        {error ? <Typography.Text type={"danger"}>{error.message}</Typography.Text> : null}
        <List loading={isLoading} users={users} list={list}></List>
    </Container>
}
const Container = styled.div`
    padding: 3.2rem;
`
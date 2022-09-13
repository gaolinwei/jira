import { UserAuth } from "context/auth-context"
import * as qs from "qs"

const apiUrl = "http://localhost:8000"
interface Config extends RequestInit {
    token?: string,
    data?: object
}
export const http = async (endpoint: string, { data, token, headers, ...customConfig }: Config = {}) => {

    const config = {
        method: 'GET',
        headers: {
            Authorization: token ? `Bearer${token}` : '',
            'Context-Type': data ? 'application/json' : ''
        },
        ...customConfig
    }
    if (config.method.toUpperCase() === "GET") {
        endpoint += `?${qs.stringify(data)}`
    } else {
        config.body = JSON.stringify(data || {})
    }
    return window.fetch(`${apiUrl}/${endpoint}`, {})
}
export const useHttp = () => {
    const { user } = UserAuth()
    return (...[endpoint, config]: Parameters<typeof http>) => http(endpoint, { ...config, token: user?.token })
}
type Person = {
    name: string,
    age: number
}
// const xiaoMing: Partial<Person> = {} //Partial可以传 可以不传
//const xiaoMing: Omit<Person, 'name'> = { age: 1 } //联合类型 可以删除联合类型中的某 个
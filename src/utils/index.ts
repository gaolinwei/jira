import { useEffect, useState } from "react"

export const isFalsy = (value:unknown) => value === 0 ? false : !value

export const cleanObj = (obj:any) => {
    const result = { ...obj }
    Object.keys(result).forEach((key : string) => {
        const value = result[key]
        if (isFalsy(value)) {
            delete result[key]
        }
    })
    return result
}
export const useMount = (callback:()=>void) => {
    useEffect(() => {
        callback()
    }, [])
}
//防抖
export const useDebounce =<T> (value:T, delay:number):T => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timer = setTimeout(() => setDebounceValue(value), delay)
        return () => clearTimeout(timer)
    }, [value, delay])
    return debounceValue
}
import { useEffect, useState } from "react"

export const isFalsy = (value) => value === 0 ? false : !value

export const cleanObj = (obj) => {
    const result = { ...obj }
    Object.keys(result).forEach(key => {
        const value = result[key]
        if (isFalsy(value)) {
            delete result[key]
        }
    })
    return result
}
export const useMount = (callback) => {
    useEffect(() => {
        callback()
    }, [])
}
//防抖
export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timer = setTimeout(() => setDebounceValue(value), delay)
        return () => clearTimeout(timer)
    }, [value, delay])
    return debounceValue
}
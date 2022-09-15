import { useEffect, useState } from "react"

export const isFalsy = (value: unknown) => value === 0 ? false : !value
export const isVoid = (value: unknown) => value === undefined || value === null || value === ""
export const cleanObj = (obj: { [key: string]: unknown }) => {
    const result = { ...obj }
    Object.keys(result).forEach((key: string) => {
        const value = result[key]
        if (isVoid(value)) {
            delete result[key]
        }
    })
    return result
}
export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
    }, [])
}
//防抖
export const useDebounce = <T>(value: T, delay: number) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timer = setTimeout(() => setDebounceValue(value), delay)
        return () => clearTimeout(timer)
    }, [value, delay])
    return debounceValue
}

export const UseArray = <T>(initialArray: T[]) => {
    const [value, setValue] = useState(initialArray)
    return {
        value,
        setValue,
        add: (item: T) => setValue([...value, item]),
        clear: () => setValue([]),
        removeIndex: (index: number) => setValue(value.filter((v, i) => i !== index))
    }

}

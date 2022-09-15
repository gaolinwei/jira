import React from "react";
import { UseArray } from "../../utils"
export const Test = () => {
    const persons: { name: string, age: number }[] = [
        { name: "jack", age: 18 },
        { name: "归海一刀", age: 20 }
    ]
    const { value, add, removeIndex, clear } = UseArray(persons)
    return (
        <div>
            <button onClick={() => add({ name: "傻波", age: 19 })}>add</button>
            <button onClick={() => removeIndex(0)}>removeIndex</button>
            <button onClick={() => clear()}>clear</button>
            {
                value.map(v => {
                    return (
                        <div>
                            <div>{v.name}</div>
                            <div>{v.age}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
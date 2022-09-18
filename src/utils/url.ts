import { useSearchParams, URLSearchParamsInit } from "react-router-dom"
import { useMemo, useState } from "react"
import { cleanObj } from "utils";
export const useUrlQueryParam = <K extends string>(keys: K[]) => {
    const [searchParams, setSearchParam] = useSearchParams();
    const [stateKeys] = useState(keys);
    return [
        useMemo(
            () =>
                subset(Object.fromEntries(searchParams), stateKeys) as {
                    [key in K]: string;
                },
            [searchParams, stateKeys]
        ),
        (params: Partial<{ [key in K]: unknown }>) => {
            // iterator
            // iterator: https://codesandbox.io/s/upbeat-wood-bum3j?file=/src/index.js
            const o = cleanObj({
                ...Object.fromEntries(searchParams),
                ...params,
            }) as URLSearchParamsInit;
            return setSearchParam(o);
        },
    ] as const;
};

export const subset = <
    O extends { [key in string]: unknown },
    K extends keyof O
>(
    obj: O,
    keys: K[]
) => {
    const filteredEntries = Object.entries(obj).filter(([key]) =>
        keys.includes(key as K)
    );
    return Object.fromEntries(filteredEntries) as Pick<O, K>;
};
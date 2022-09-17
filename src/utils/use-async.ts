import { useState } from "react";
import { json } from "stream/consumers";

interface State<D> {
    error: Error | null;
    data: D | null;
    stat: 'idle' | 'loading' | 'error' | 'success'
}
const defaulInitialState: State<null> = {
    stat: 'idle',
    data: null,
    error: null
}
export const useAsync = <D>(initialState?: State<D>) => {
    const [state, setState] = useState<State<D>>({
        ...defaulInitialState,
        ...initialState
    })
    const setData = (data: D) => setState({
        data,
        stat: 'success',
        error: null
    })
    const setError = (error: Error) => setState({
        error,
        stat: 'error',
        data: null
    })
    const run = (promise: Promise<any>) => {
        if (!promise || !promise.then) {
            throw new Error('请传递Promise数据类型')
        }
        setState({ ...state, stat: 'loading' })
        return promise.then((data) => {
            setData(data)
            // console.log("statestate", data.json());
            return data.json()

        }).catch(error => {
            setError(error)
            return error
        })
    }
    return {
        isIdle: state.stat === 'idle',
        isLoading: state.stat === 'loading',
        isError: state.stat === 'error',
        isSuccess: state.stat === 'success',
        run,
        setData,
        setError,
        ...state
    }
}

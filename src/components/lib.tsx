import styled from "@emotion/styled"
import react from "react"
import { Spin } from "antd"
export const Row = styled.div<{
    gap?: number | boolean,
    between?: boolean
    marginBottom?: number
}>`
    display: flex;
    align-items: center;
    justify-content: ${props => props.between ? 'space-between' : undefined};
    margin-bottom: ${props => props.marginBottom + 'rem'};
    >*{
        margin-top: 0 !important;
        margin-right: 0 !important;
        margin-right: ${props => typeof props.gap === 'number' ? props.gap + 'rem' : props.gap ? '2rem' : undefined} !important;

    }
`
const FullPage = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const FullPageLoading = () => <FullPage>
    <Spin size={"large"}></Spin>
</FullPage>

export const newError = () => <FullPage>
    <h1>报错了!!</h1>
</FullPage>
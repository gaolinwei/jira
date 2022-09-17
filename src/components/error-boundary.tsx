import React from "react";
type FallbacRender = (props: { error: Error | null }) => React.ReactElement
export class ErrorBoundary extends React.Component<React.PropsWithChildren<{ fallbackRender: FallbacRender }>, { error: Error | null }>{
    state = { error: null }
    static getDerivedStateFromError(error: Error) {
        return { error }
    }
    render() {
        const { error } = this.state
        const { fallbackRender, children } = this.props
        if (error) return fallbackRender({ error })
        return children
    }
}
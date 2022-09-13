import { UserAuth } from "context/auth-context"
import React,{ useState } from "react"
import { ProjectListScreen } from "screens/project-list"

export const AuthenticatedApp = ()=>{
    const { logout } = UserAuth()
return <div>
    <button onClick={logout}>注销</button>
    <ProjectListScreen/>
</div>
}

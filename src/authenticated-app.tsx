import React from "react"
import { UserAuth } from "context/auth-context"
import { ProjectListScreen } from "screens/project-list"
import styled from '@emotion/styled'
import { Row } from "components/lib"
import { ReactComponent as SoftwareLogo } from "./assets/software-logo.svg"
import { Button, Dropdown, Menu } from "antd"

export const AuthenticatedApp = () => {
    const { logout, user } = UserAuth()
    console.log(user, "user");

    return <Container>
        <Header between={true}>
            <HeaderLeft gap={true}>
                <SoftwareLogo width={'18rem'} color={'rgb(38,132,255)'} />
                <h3>项目</h3>
                <h3>用户</h3>
            </HeaderLeft>
            <HeaderRight>
                <Dropdown overlay={<Menu>
                    <Menu.Item>
                        <Button type={"link"} onClick={logout}>注销</Button>
                    </Menu.Item>
                </Menu>}>
                    <Button type={"link"} onClick={e => e.preventDefault()}>Hi,&nbsp;{user?.name}</Button>

                </Dropdown>
            </HeaderRight>
        </Header>
        <Main>
            <ProjectListScreen />
        </Main>
    </Container>
}
const Container = styled.div`
   display: grid;
   grid-template-rows: 6rem 1fr 6rem;
   grid-template-areas: 
   "header header header"
   "main main main"
   ;
`
const Header = styled(Row)`
    grid-area: header;
    padding: 3.2rem;
    box-shadow: 0 0 0 5px rgba(0,0,0,0.1);
    z-index: 1;

`
const HeaderLeft = styled(Row)`
    
`
const HeaderRight = styled.div`
    
`
const Main = styled.main`
     grid-area: main;
`
import React, { useState } from "react"
import { LoginScreen } from "./login"
import { RegisterScreen } from "./register"
import { Card, Divider, Button } from 'antd'
import styled from '@emotion/styled'
import logo from '../assets/logo.svg'
import left from '../assets/left.svg'
import right from '../assets/right.svg'
export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false)
  return <Container>
    <Header />
    <Background />
    <Card>
      <Title>{isRegister ? "请注册" : "请登录"}</Title>
      {
        isRegister ? <RegisterScreen /> : <LoginScreen />
      }
      <Divider />
      <Button type={"link"} onClick={() => setIsRegister(!isRegister)}>切换到{isRegister ? '登入' : '注册'}</Button>
    </Card>

  </Container>
}
export const LongButton = styled(Button)`
    width: 100%;
`
const Title = styled.h2`
      margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`
const Container = styled.div`
     display:flex;
     flex-direction: column;
     align-items: center;
     text-align: center;
     min-height: 100vh;
     box-sizing: border-box;
`
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${left}), url(${right});
`;
const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;
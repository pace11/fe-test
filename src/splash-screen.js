import React from 'react'
import styled from 'styled-components'
import { BeatLoader } from 'react-spinners'
import theme from './uikit/common/theme'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.blue2};
  flex-direction: column;
  img {
    margin-bottom: 20px;
  }
`

export default function SplashScreen() {
  return (
    <Container>
      <img
        src={require('./assets/image/jubelio.png')}
        alt="logo"
        width="200px"
      />
      <BeatLoader color={theme.colors.blue} />
    </Container>
  )
}

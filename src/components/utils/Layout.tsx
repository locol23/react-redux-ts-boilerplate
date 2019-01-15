import * as React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const Layout = (props: Props) => <Container>{props.children}</Container>

const Container = styled.div`
  display: flex;
  justify-content: center;
`

export default Layout

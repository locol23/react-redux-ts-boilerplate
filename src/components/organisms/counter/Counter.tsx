import * as React from 'react'
import { lifecycle } from 'recompose'
import styled from 'styled-components'
import ButtonsContainer from '../../molcules/ButtonsContainer'

interface Props {
  title: string
  value: number
  setTitle(s: string): void
  increment(): void
  decrement(): void
  multiply(n: number): void
  reset(): void
}

const Component: React.SFC<Props> = props => (
  <Container>
    <Title>{props.title}</Title>
    <Value>value: {props.value}</Value>
    <ButtonsContainer {...props} />
  </Container>
)

export const Counter: React.ComponentType<Props> = lifecycle<Props, {}, {}>({
  componentDidMount() {
    this.props.setTitle('Counter')
  },
})(Component)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`

const Title = styled.h1`
  color: #333333;
`

const Value = styled.div`
  font-size: 25px;
`

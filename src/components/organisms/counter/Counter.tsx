import * as React from 'react'
import styled from 'styled-components'
import ButtonsContainer from '../../molcules/ButtonsContainer'

interface Props {
  value: number
  increment(): void
  decrement(): void
  multiply(n: number): void
  reset(): void
}

const Counter = (props: Props) => {
  const buttonsContainerProps = {
    value: props.value,
    increment: props.increment,
    decrement: props.decrement,
    multiply: props.multiply,
    reset: props.reset,
  }
  return (
    <Container>
      <Title>Counter</Title>
      <Value>value: {props.value}</Value>
      <ButtonsContainer {...props} />
    </Container>
  )
}

export default Counter

const Container = styled.div`
  padding: 10px;
`

const Title = styled.h1`
  color: #333333;
`

const Value = styled.div`
  text-align: center;
  font-size: 25px;
`

import * as React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'

interface Props {
  value: number
  increment(): void
  decrement(): void
  multiply(n: number): void
  reset(): void
}

const ButtonsContainer = (props: Props) => (
  <Container>
    <Button
      text="Increment"
      onClick={(e: any) => {
        props.increment()
      }}
    />
    <Button
      text="Decrement"
      onClick={(e: any) => {
        props.decrement()
      }}
    />
    <Button
      text="Multiply 2"
      onClick={(e: any) => {
        props.multiply(2)
      }}
    />

    <Button
      text="Reset"
      onClick={(e: any) => {
        props.reset()
      }}
    />
  </Container>
)

export default ButtonsContainer

const Container = styled.div`
  padding: 20px;
`

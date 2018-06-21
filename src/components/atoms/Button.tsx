import * as React from 'react'
import styled from 'styled-components'

interface Props {
  text: string
  onClick: (event: any) => void
}

const StyledButton = styled.button`
  margin: 5px;
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: #3f3fff;
  :active {
    background-color: #8a83ff;
  }
`

const Button = ({ text, onClick }: Props) => (
  <StyledButton onClick={onClick}>{text}</StyledButton>
)

export default Button

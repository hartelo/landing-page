import React from "react"
import styled from "styled-components"
import { colors } from "../globalStyles"

interface ButtonProps {
  children: string
  onClick: () => void
  color?: string
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
)

const StyledButton = styled.button`
  color: ${colors.white};
  background-color: ${colors.green};
  padding: 0.8rem 1.8rem;
  border-radius: 8rem;
`

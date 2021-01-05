import React from "react"
import { Column, PaddedRow } from "../common/Layout"
import GlutenFreeIconSVG from "../../assets/gluten-free.svg"
import VeganIconSVG from "../../assets/vegan.svg"
import { Text } from "../common/Typography"
import { colors } from "../globalStyles"
import styled from "styled-components"

export const IconRow = () => {
  return (
    <StyledPaddedRow>
      <Column>
        <GlutenFreeIconSVG />
        <Text center={true} color={colors.green}>
          Gluten Free
        </Text>
      </Column>
      <Column>
        <VeganIconSVG />
        <Text center={true} color={colors.green}>
          Vegan
        </Text>
      </Column>
    </StyledPaddedRow>
  )
}

const StyledPaddedRow = styled(PaddedRow)`
  padding: 2rem 0;
`

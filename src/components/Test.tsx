import * as React from "react"
import styled from "styled-components"
import { MediumText, Text } from "./common/Text"
import { SmallTitle, Title } from "./common/Typography"

export interface TestProps {
  siteTitle?: string
}

const View = styled.div``

export const Test: React.SFC<TestProps> = () => {
  return (
    <View>
      <Title>Hello!</Title>
      <SmallTitle>Hello!</SmallTitle>
      <MediumText>Hello!</MediumText>
      <Text>Hello!</Text>
    </View>
  )
}

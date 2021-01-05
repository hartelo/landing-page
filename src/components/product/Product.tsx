import React from "react"
import { Button } from "../common/Button"
import { Section } from "../common/Section"
import { Title, SmallTitle, Text } from "../common/Typography"
import styled from "styled-components"
import { IconRow } from "./IconRow"

export const Product = () => {
  return (
    <Section verticalCenter={true} horizontalCenter={true}>
      <ProductWrapper>
        <div>
          <Title>Lime-passion</Title>
          <Text>500 ml</Text>
          <SmallTitle>Ainesosaluettelo</SmallTitle>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            suscipit ipsum totam ullam deserunt, neque qui quo eligendi dolorum
            repudiandae vel.
          </Text>
          <IconRow />
          <Button onClick={() => console.log("wow")}>Takaisin</Button>
        </div>
        <div>
          <Title>Lime-passion</Title>
          <Text>500 ml</Text>
          <SmallTitle>Ainesosaluettelo</SmallTitle>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            suscipit ipsum totam ullam deserunt, neque qui quo eligendi dolorum
            repudiandae vel.
          </Text>
          <IconRow />
          <Button onClick={() => console.log("wow")}>Takaisin</Button>
        </div>
      </ProductWrapper>
    </Section>
  )
}

const ProductWrapper = styled.div`
  display: flex;
  padding: 0 10%;
`

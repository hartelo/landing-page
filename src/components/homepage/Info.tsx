import React from "react"
import { useStore } from "../../store/Store"
import { Section } from "../common/Section"
import { Title, Text } from "../common/Typography"
import { colors } from "../globalStyles"
import styled from "styled-components"

interface InfoProps {
  isSelected: boolean
}

export const Info: React.FC<InfoProps> = ({ isSelected }) => {
  const { dispatch } = useStore()
  React.useEffect(() => {
    if (isSelected) {
      dispatch({ type: "setBackgroundColor", payload: { color: "pink" } })
    }
  }, [isSelected])

  return (
    <Section center={true}>
      <PaddedTitle color={colors.white}>Jäätelömme</PaddedTitle>
      <PaddedText color={colors.white}>
        Härtelön pohjaraaka-aineena käytetään suomalaista härkäpapua.
        Yrityksemme Lipasu Oy pyörii Helsingistä käsin seitsemän jäätelöä
        rakastavan yrittäjänaisen voimin.
        <br />
        <br />
        Elintarviketieteiden opiskelijoiden kurssityönä syntynyt Härtelö
        yhdistää mielenkiintoisen ja kestävän raaka-aineen rakkaisiin
        perinteisiin. Ennen kaikkea pyrimme siihen, että Härtelö on aina
        vähintään yhtä herkullinen ja täyteläinen, kuin perinteiset jäätelöt.
      </PaddedText>
    </Section>
  )
}

const PaddedTitle = styled(Title)`
  padding-bottom: 3rem;
  text-align: center;

  @media only screen and (min-width: ${props =>
      props.theme.breakpoints.tablet}px) {
    padding: 0 10rem 3rem 10rem;
    text-align: left;
  }
`

const PaddedText = styled(Text)`
  padding: 0 3rem;

  @media only screen and (min-width: ${props =>
      props.theme.breakpoints.tablet}px) {
    padding: 0 10rem 3rem 10rem;
    max-width: 40vw;
    text-align: left;
  }
`

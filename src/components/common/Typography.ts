import styled from "styled-components"
import { color, textAlign } from "../../utils"

/*
 * ====================
 * = Title components =
 * ====================
 */

export const MainTitle = styled.h1`
  font-family: "Shandon Slab";
  font-size: 4rem;
  text-align: ${textAlign};
  color: ${color};
`

export const Title = styled.h3`
  font-family: "Shandon Slab";
  font-size: 3rem;
  text-align: ${textAlign};
  color: ${color};
`

export const SmallTitle = styled.h5`
  font-family: "Shandon Slab";
  font-size: 1.2rem;
  text-align: ${textAlign};
  color: ${color};
`

/*
 * ===================
 * = Text components =
 * ===================
 */

export const Text = styled.p`
  font-size: 1rem;
  text-align: ${textAlign};
  color: ${color};
`

export const MediumText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  text-align: ${textAlign};
  color: ${color};
`

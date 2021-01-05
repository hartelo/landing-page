import styled from "styled-components"

export const Row = styled.div`
  display: flex;
`

export const PaddedRow = styled(Row)`
  & > *:nth-child(1) {
    padding-left: 0rem;
  }

  & > *:last-child {
    padding-right: 0rem;
  }

  & > * {
    padding: 0 0.5rem;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

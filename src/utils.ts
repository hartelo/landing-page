import { colors } from "./components/globalStyles"

export const assertUnreachable = (_: never): never => {
  throw new Error("Didn't expect to get here")
}

export const textAlign = (props: { center?: boolean }) =>
  props.center ? "center" : "left"

export const color = (props: { color?: string }) => props.color ?? colors.black

export const backgroundColor = (props: { backgroundColor?: string }) =>
  props.backgroundColor ?? colors.black

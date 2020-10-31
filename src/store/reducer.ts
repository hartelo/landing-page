import { State } from "./Store"

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setBackgroundColor":
      return { ...state, backgroundColor: action.payload.color }
    default:
      return state
  }
}

export type Action = SetBackgroundColorAction

interface SetBackgroundColorAction {
  type: "setBackgroundColor"
  payload: {
    color: "green" | "pink" | "white"
  }
}

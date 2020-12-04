import { State } from "./Store"

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setBackgroundColor":
      return { ...state, backgroundColor: action.payload.color }
    case "setPageIndex":
      return { ...state, pageIndex: action.payload.index }
    case "setMenuOpen":
      return { ...state, menuOpen: action.payload.open }
    default:
      return state
  }
}

export type Action =
  | SetBackgroundColorAction
  | SetPageIndexAction
  | SetMenuOpenAction

interface SetBackgroundColorAction {
  type: "setBackgroundColor"
  payload: {
    color: "green" | "pink" | "white"
  }
}

interface SetPageIndexAction {
  type: "setPageIndex"
  payload: {
    index: number
  }
}

interface SetMenuOpenAction {
  type: "setMenuOpen"
  payload: {
    open: boolean
  }
}

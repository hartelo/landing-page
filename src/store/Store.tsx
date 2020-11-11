import React, { createContext, useContext, useReducer } from "react"
import { Action, reducer } from "./reducer"

const initialState: State = {
  backgroundColor: "pink",
  pageIndex: 0,
}

export const StoreContext = createContext<Store>({
  state: initialState,
  dispatch: (_: Action) => initialState,
})

export const StoreProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)

export interface State {
  backgroundColor: "green" | "pink" | "white"
  pageIndex: number
}

export interface Store {
  state: State
  dispatch: React.Dispatch<Action>
}

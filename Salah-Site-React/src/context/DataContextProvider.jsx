import React, { createContext, useReducer } from 'react'
import { reducer } from '../reducer/reducer';

export const dataContext = createContext(null);
const initialState = {
    cart: []
}

function DataContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <dataContext.Provider value={{state, dispatch}}>
          {children}
    </dataContext.Provider>
  )
}

export default DataContextProvider
import React, {useReducer, useState}from 'react'
import { MyContext } from './context'
import {initialState, reducer} from "./reducer"


export default function Container({children}) {
   const [state, dispatch]=useReducer(reducer, initialState)
  
  return (
    <MyContext.Provider value={{state, dispatch}}>
        {children}
    </MyContext.Provider>
  )
}

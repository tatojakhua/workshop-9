import React, { createContext, useEffect, useReducer } from 'react'
import { useContext } from 'react';
import { appReducer, initalState } from './appReducer';
import { userError, userFetch, userIsLoading } from './actionCreators';

 const context = createContext();

const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initalState)
    console.log(1);

    useEffect(() => {
      dispatch(userIsLoading(true))
   fetch("https://jsonplaceholder.typicosdgsdgsdgsdgde.com/users").then(response=> {
    if (response.ok) {
      return response.json()
    }
    throw new Error("fetch error")
   }).then(data=> dispatch(userFetch(data))).catch(err=> dispatch(userError(err.message)))
    }, [])
    
    
  return (
    <context.Provider value={{state, dispatch}}>{children}</context.Provider>
  )
}

export const useAppContext = () => {
    const appContext = useContext(context);
    if (appContext) {
        return appContext
    }
    throw new Error("App context Error")
}

export default AppContextProvider
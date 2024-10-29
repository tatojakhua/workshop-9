import React from 'react'
import {  useAppContext } from '../context/AppContextProvider'
import { DecrementAction, IncrementAction } from '../context/actionCreators'

const Products = () => {
    const {state, dispatch} = useAppContext()    
  return (
    <div>
        <h1>Products</h1>
        <h1>Counter: {state.counter}</h1>
        <button onClick={()=> {dispatch(IncrementAction(50))}}>INCREMENT</button>
        <button onClick={()=> {dispatch(DecrementAction(10))}}>DECREMENT</button>
    </div>
  )
}

export default Products
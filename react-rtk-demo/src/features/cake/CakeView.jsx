import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

// now inport actions 
import {orders ,restocked } from './cakeSlice'

export const CakeView = () => {
    // yha pr state. will go to reducers abd now key to call that reducer 
    const numOfCakes = useSelector((state)=> state.cake.numOfCakes)

    const dispatch = useDispatch()


  return (
    <div>
      <h2>Number of cakes -{numOfCakes}</h2>
      <button onClick={() => dispatch(orders())}>Order cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>

    </div>
  )
}


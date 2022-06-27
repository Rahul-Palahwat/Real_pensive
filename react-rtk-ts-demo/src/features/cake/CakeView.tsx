import React from 'react'

// for typescript 
// import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../app/hooks'

// now inport actions 
import {orders ,restocked } from './cakeSlice'

export const CakeView = () => {
    // yha pr state. will go to reducers abd now key to call that reducer 
    const numOfCakes = useAppSelector((state)=> state.cake.numOfCakes)

    const dispatch = useAppDispatch()


  return (
    <div>
      <h2>Number of cakes -{numOfCakes}</h2>
      <button onClick={() => dispatch(orders())}>Order cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>

    </div>
  )
}


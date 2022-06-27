import React, { useState } from 'react'


// import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../app/hooks'

// import actions 
import {order, restocke} from './icecreamSlice'

export const IcecreamView = () => {

    const [value, setValue] = useState(1);


    const numOfIceCreams = useAppSelector((state) => state.icecream.numOfIceCream)

    const dispatch = useAppDispatch()

    const increase = () => {
        dispatch(restocke(value));
    }
  return (
    <div>
      <h2>Number of ice creams -{numOfIceCreams}</h2>
      <button onClick={() => dispatch(order(3))}>Order ice cream</button>
      <input type="number" value={value} onChange={ e => setValue(parseInt(e.target.value))}/>
      <button onClick={increase}>Restock ice creams</button>
      {/* <button onClick={() => dispatch(restocke(value))}>Restock ice creams</button> */}
    </div>
  )
}



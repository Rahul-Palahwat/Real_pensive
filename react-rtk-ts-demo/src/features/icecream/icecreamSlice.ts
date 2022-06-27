import {orders,restocked} from '../cake/cakeSlice'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialState={
    numOfIceCream: number
}
const initialState:initialState={
    numOfIceCream: 50,
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState: initialState,
    reducers:{
        order:(state,actions:PayloadAction<number>)=>{
            state.numOfIceCream-=actions.payload
        },
        restocke:(state, actions:PayloadAction<number>) => {
            state.numOfIceCream+=actions.payload
        },

    },
    // this is not the recommended way 

    // extraReducers: {
    //     ['cake/orders']: (state)=>{
    //         state.numOfIceCream--
    //     }
    // }

    extraReducers: (builder) => {
        builder.addCase(orders , state => {
            state.numOfIceCream--
        })
    }
})

export default icecreamSlice.reducer
export const {order, restocke} = icecreamSlice.actions
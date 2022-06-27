import { createSlice , PayloadAction } from '@reduxjs/toolkit'


type initialState = {
    numOfCakes: number
}

const initialState: initialState = {
    numOfCakes: 10,
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState: initialState,
    reducers:{
        orders: (state) => {
            state.numOfCakes--
        },
        restocked: (state , actions: PayloadAction<number>) => {
            state.numOfCakes+=actions.payload
        }
    },
})

export default cakeSlice.reducer

export const {orders,restocked} = cakeSlice.actions
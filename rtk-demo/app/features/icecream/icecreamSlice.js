const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState={
    numOfIceCream: 50,
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState: initialState,
    reducers:{
        orders:(state,actions)=>{
            state.numOfIceCream-=actions.payload
        },
        restocked:(state, actions) => {
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
        builder.addCase(cakeActions.orders , state => {
            state.numOfIceCream--
        })
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions
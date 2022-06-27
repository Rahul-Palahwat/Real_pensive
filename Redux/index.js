const redux = require('redux')
const createStore= redux.createStore

// to combine multiple reducers 
const combineReducers = redux.combineReducers

// this is middleware 
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'


// action is an object with the type property 
// action creator is an function that return action 


// reducers specify how the app's state changes in response to actions sent to the store 

function buycake(){
    return{
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function buyice(){
    return{
        type: BUY_ICECREAM,
        info: 'First redux actions'
    }
}

//(previousState,action) => newState;

// const initialState={
//     numOfCakes:10,
//     numOfIceCreams:20
// }

const initialCakeState={
    numOfCakes: 10
}
const initialIceCreamState={
    numOfIceCreams: 20
}

// const reducer = (state=initialState, action) => {
//     switch(action.type){
//         case BUY_CAKE: return{

//             // to make the copy we use the spread operator 
//             ...state,
//             // by this only no of cakes will chnage other property will remain same 


//             numOfCakes: state.numOfCakes-1
//         }
//         case BUY_ICECREAM: return{

//             // to make the copy we use the spread operator 
//             ...state,
//             // by this only no of cakes will chnage other property will remain same 


//             numOfIceCreams: state.numOfIceCreams-1
//         }
//         default: return state
//     }
// }
const cakeReducer = (state=initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes-1
        }
        default: return state
    }
}
const iceCreamReducer = (state=initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIceCreams: state.numOfIceCreams-1
        }
        default: return state
    }
}

//1. now it is holding application state 
// const store=createStore(reducer)
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store=createStore(rootReducer, applyMiddleware(logger))
// 2. to access state via getState() 
console.log('Initial state', store.getState())
// 4. Register listeners via subscribe 
const unsubscribe=store.subscribe(()=> console.log('Updated state', store.getState()))
// 3. Allow state to be updated by dispatch() 
store.dispatch(buycake())
store.dispatch(buyice())
store.dispatch(buyice())
store.dispatch(buycake())
store.dispatch(buycake())
// console.log(initialCakeState.cake.numOfCakes)
// 5. unregistering from the store 
unsubscribe();
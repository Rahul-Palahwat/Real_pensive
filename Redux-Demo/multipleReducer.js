const redux = require('redux')

const createStore = redux.createStore

// to bind all the actions in a single line 
const bindActionCreators = redux.bindActionCreators

// to combine reducers 
const combineReducers=redux.combineReducers


// for middleware 
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware



// action type 
const CAKE_ORDERED = 'CAKE_ORDERED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'

const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'


// intial state of the shop 
const initialCake={
    numOfCakes:20
}
const initialIceCream={
    numOfIceCream:50
}


// method 
function orderCake(qty=1){
    return{
        type: CAKE_ORDERED,
        payload: qty,
    } 
}
function orderIceCream(qty=1){
    return{
        type: ICECREAM_ORDERED,
        payload: qty,
    } 
}
function restockCake(qty=1){
    return {
        type: CAKE_RESTOCKED,
        payload:qty
    }
}
function restockIceCream(qty=1){
    return {
        type: ICECREAM_RESTOCKED,
        payload:qty
    }
}


// reducer that will handle the action and output accordingly 
const cakeReducer=(state=initialCake,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes : state.numOfCakes-action.payload
            }
        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCakes : state.numOfCakes+action.payload
            }
        default: return state
    }
}
const iceCreamReducer=(state=initialIceCream,action)=>{
    switch(action.type){
        case ICECREAM_ORDERED:
            return{
                ...state,
                numOfIceCream : state.numOfIceCream-action.payload
            }
        case ICECREAM_RESTOCKED:
            return{
                ...state,
                numOfIceCream : state.numOfIceCream+action.payload
            }
        default: return state
    }
}


// now we will combine reducres 
const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// here we are creating the store 
const store = createStore(rootReducers, applyMiddleware(logger))

console.log('Initial state',store.getState())

// here we are subscribing to the store so that we can remain updated if there are any changes in the state 
const unsubscribe=store.subscribe(()=> {})



// now we will use bindActionCreators to bind all actions in a single line 
const actions = bindActionCreators({orderCake,restockCake,orderIceCream,restockIceCream}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(10)
actions.restockIceCream(20)
actions.orderIceCream(15)

unsubscribe()

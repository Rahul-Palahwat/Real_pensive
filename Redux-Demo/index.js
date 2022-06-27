const redux = require('redux')

const createStore = redux.createStore

// to bind all the actions in a single line 
const bindActionCreators = redux.bindActionCreators


// action type 
const CAKE_ORDERED = 'CAKE_ORDERED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'

const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'


// intial state of the shop 
const initialState={
    numOfCakes:20,
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
const reducer=(state=initialState,action)=>{
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


// here we are craeting the store 
const store = createStore(reducer)

console.log('Initial state',store.getState())

// here we are subscribing to the store so that we can remain updated if there are any changes in the state 
const unsubscribe=store.subscribe(()=> console.log('update state', store.getState()))

// we call each action seperately 
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))
// store.dispatch(restockCake(8))

// now we will use bindActionCreators to bind all actions in a single line 
const actions = bindActionCreators({orderCake,restockCake,orderIceCream,restockIceCream}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(10)
actions.restockIceCream(20)
actions.orderIceCream(15)

unsubscribe()

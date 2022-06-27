const store = require('./app/store')

const cakeActions = require('./app/features/cake/cakeSlice').cakeActions
const icecreamActions = require('./app/features/icecream/icecreamSlice').icecreamActions
const fetchUsers = require('./app/features/user/userSlice').fetchUsers

console.log("Initial state", store.getState())

// const unsubscribe = store.subscribe(() => {
//     console.log('Updated state', store.getState())
// })
const unsubscribe = store.subscribe(() => {
    
})

// store.dispatch(cakeActions.orders())
// store.dispatch(cakeActions.orders())
// store.dispatch(cakeActions.orders())
// store.dispatch(cakeActions.restocked(13))

// store.dispatch(icecreamActions.orders(5))
// store.dispatch(icecreamActions.orders(10))
// store.dispatch(icecreamActions.orders(15))
// store.dispatch(icecreamActions.restocked(10))

store.dispatch(fetchUsers())

unsubscribe()
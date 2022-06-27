const configureStore = require('@reduxjs/toolkit').configureStore


// for moddleware 
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

// import cakeReducer 
const cakeReducer = require('../app/features/cake/cakeSlice')

// import icecream Readucer 
const icecreamReducer = require('../app/features/icecream/icecreamSlice')

// import userReducer 
const userReducer = require('./features/user/userSlice')

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports = store
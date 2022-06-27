import { configureStore } from '@reduxjs/toolkit'

// for moddleware 
// const reduxLogger = require('redux-logger')
// const logger = reduxLogger.createLogger()

// import cakeReducer 
import cakeReducer from '../features/cake/cakeSlice'


// import icecream Readucer 
import icecreamReducer from '../features/icecream/icecreamSlice'

// import userReducer 
import userReducer from '../features/user/userSlice'

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
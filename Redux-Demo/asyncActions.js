const redux = require('redux')
const createStore = redux.createStore

// for applyMiddleware
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default


// for api call 
const axios = require('axios')



const initialState={
    loading: false,
    users: [],
    error : '',
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'


const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    }
}

const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload : users
    }
}

const fetchUserFailure = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUESTED:
            return{
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCEEDED:
            return{
                ...state,
                loading: false,
                users: action.payload,
                error:'',

            }
        case FETCH_USERS_FAILED:
            return{
                ...state,
                loading: false,
                users: [],
                error: action.payload,
            }
    }

}


const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserRequest())
        // response.data is the users 
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            const users = response.data.map((user) => user.id)
            dispatch(fetchUserSuccess(users))
        }).catch(error => {
            // this is the error message 
            dispatch(fetchUserFailure(error.message))
        })
    }
}


const store = createStore(reducer , applyMiddleware(thunkMiddleware))


store.subscribe(() => console.log(store.getState()))

store.dispatch(fetchUsers())
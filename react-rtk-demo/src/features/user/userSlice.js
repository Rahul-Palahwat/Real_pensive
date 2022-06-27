import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// createasyncThunk to call dispatch inside a function 




// for API call 
import axios from 'axios'


const initialState={
    loading: false,
    user: [],
    error: '',
}


// It automatically generates isPending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers',() => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(
        response => response.data
    )
})

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending , state => {
            state.loading=true
        })
        builder.addCase(fetchUsers.fulfilled ,(state, action) => {
            // console.log({a:action})
            state.loading = false
            state.user = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state,action) => {
            state.loading = false
            state.user = []
            state.error = action.error.message
        })
    }
})


export default userSlice.reducer

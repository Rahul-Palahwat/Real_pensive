import React, { useEffect } from 'react'

// import { useDispatch, useSelector } from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../app/hooks'

import {fetchUsers} from './userSlice'

export const UserView = () => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUsers())
    },[])
  return (
    <div>
      <h2>List of users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div>:null}
      {!user.loading && user.user.length ? (
        <ul>
            {
                user.user.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
      ):null}
    </div>
  )
}


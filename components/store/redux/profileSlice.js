import { createSlice} from '@reduxjs/toolkit'
import users from '../../../screens/profileScreen'


const initialState = {
    users : users,
    selectedUser: null
};

export const profileSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        setSelectedUser: (state, action) =>{
            console.log('state',state)
        }
    }
})


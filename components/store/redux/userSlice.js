import {createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit'

const customisedMiddleware = getDefaultMiddleware({
    serializableCheck:false
})
export const userSlice = createSlice({

    name:'Users',
    initialState:[],
    reducers:{
        addUser: (state, action) => {
            const newUser = {
                // id: nanoid(),
                email: action.payload.email,
                password: action.payload.password,

            }
            state.push(newUser)
        }
    }
})


export const { addUser } = userSlice.actions
export const {reset} = userSlice.actions
export default userSlice.reducer

// const user = JSON.parse(localStorage.getItem('user'));

// const initialState = {
//     user: user ? user :null,
//     isError : false,
//     isSuccess: false,
//     isLoading: false,
//     message: ''
// }


// export const register = createAsyncThunk('auth/register', async(user, thunkAPI) =>{
//     try{
//         return await authService.register(user)
//     }catch(error){

//     }
// })
// name: 'user',
//     initialState,
//     reducers:{
//         reset: (state) => {
//             state.isLoading=false
//             state.isSuccess=false
//             state.isError=false
//             state.message=''
//         }
//     },
//     extraReducers: () => {

//     }

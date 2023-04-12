import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    msg: "",
    user: "",
    token:"",
    loading: false,
    error: ""
}

export const signupUser = createAsyncThunk('signupUser', async()=>{
    const res = await fetch("ddddddddddd",{
        method:"post",
        headers:{
            'Content-Type': "application/json",
        },
        body: JSON.stringify(body)
    })
    return await res.json();
})

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addToken: (state,action) => {
            state.token = localStorage.getItem('token')
        }
    },
    extraReducers:{
        [signupUser.pending]: (state,action)=>{
            state.loading = true
        },
        [signupUser.fulfilled]: (state,{payload:{error,msg}})=>{
            state.loading = false;
            if(error){
                state.error = error
            }else{
                state.msg = msg
            }
        },
        [signupUser.rejected]: (state,action)=>{
            state.loading = true
        },
    }
})

export default authSlice.reducer
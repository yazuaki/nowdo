import {createSlice, nanoid } from '@reduxjs/toolkit'

export const activitySlice = createSlice({
    name:'activities',
    initialState:[],
    reducers:{
        addActivity: (state, action) => {
            const newActivity = {
                id: nanoid(),
                name: action.payload.task,
                location: action.payload.location
            }
            state.push(newActivity)
        },
        deleteActivity: (state, action) =>{
            return state.filter((item)=>item.id !== action.payload.id)
        }

    }
})
console.log(activitySlice)

export const { addActivity, deleteActivity } = activitySlice.actions

export default activitySlice.reducer
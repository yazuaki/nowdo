import { configureStore } from "@reduxjs/toolkit";
import { activitySlice } from "./activitySlice";
import { userSlice } from "./redux/userSlice";
import { profileSlice } from "./redux/profileSlice";


export const store = configureStore({
    reducer:{
        activity: activitySlice.reducer,
        user: userSlice.reducer,
        profile: profileSlice.reducer
    }
})

import { createSlice } from "@reduxjs/toolkit";


const configslice = createSlice({
    name : "config",
    initialState : {
        lang : "eng",
    },
    reducers : {
        changeLanguage : (state, action) => {
            state.lang = action.payload;
        }, 
    },
});


export const {changeLanguage} = configslice.actions;
export default configslice.reducer;
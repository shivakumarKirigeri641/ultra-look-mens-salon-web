import { createSlice } from "@reduxjs/toolkit";

const currentDateSummarySlice = createSlice({
    name:'currentDateSummary',
    initialState:null,
    reducers:{
        addcurrentDateSummary:(state, action)=>{
            return action.payload;
        },
        removecurrentDateSummary:(state, action)=>{
            return null;
        }
    }
});
export const {addcurrentDateSummary, removecurrentDateSummary} = currentDateSummarySlice.actions;
export default currentDateSummarySlice.reducer;

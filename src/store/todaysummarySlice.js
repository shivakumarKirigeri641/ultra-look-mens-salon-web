const { createSlice } = require("@reduxjs/toolkit");

const todaysummarySlice = createSlice({
    name:'todaysummary',
    initialState:null,
    reducers:{
        addtodaysummary:(state, action)=>{
            return action.payload;
        },
        removetodaysummary:(state)=>{
            return null;
        }
    }
});
export const {addtodaysummary, removetodaysummary} = todaysummarySlice.actions;
export default todaysummarySlice.reducer;
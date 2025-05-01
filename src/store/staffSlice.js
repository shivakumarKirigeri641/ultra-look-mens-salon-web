const { createSlice } = require("@reduxjs/toolkit");

const staffSlice = createSlice({
    name:'staff',
    initialState:null,
    reducers:{
        addStaff:(state, action)=>{
            return action.payload;
        },
        removeStaff:(state)=>{
            return null;
        }
    }
});
export const {addStaff, removeStaff} = staffSlice.actions;
export default staffSlice.reducer;
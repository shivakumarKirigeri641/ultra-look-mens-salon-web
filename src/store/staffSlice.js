const { createSlice } = require("@reduxjs/toolkit");

const staffSlice = createSlice({
    name:'staff',
    initialState:null,
    reducers:{
        addStaff:(state, action)=>{
            state = action.payload;
        },
        removeStaff:(state)=>{
            state = null;
        }
    }
});
export const {addStaff, removeStaff} = staffSlice.actions;
export default staffSlice.reducer;
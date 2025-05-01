const { createSlice } = require("@reduxjs/toolkit");

const adminSlice = createSlice({
    name:'Admin',
    initialState:null,
    reducers:{
        addAdmin:(state, action)=>{
            state = action.payload;
        },
        removeAdmin:(state)=>{
            state = null;
        }
    }
});
export const {addAdmin, removeAdmin} = adminSlice.actions;
export default adminSlice.reducer;
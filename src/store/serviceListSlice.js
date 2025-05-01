const { createSlice } = require("@reduxjs/toolkit");

const serviceListSlice = createSlice({
    name:'ServiceList',
    initialState:null,
    reducers:{
        addServiceList:(state, action)=>{
            return action.payload;
        },
        removeServiceList:(state)=>{
            return null;
        }
    }
});
export const {addServiceList, removeServiceList} = serviceListSlice.actions;
export default serviceListSlice.reducer;
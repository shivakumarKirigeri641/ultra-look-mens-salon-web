const { createSlice } = require("@reduxjs/toolkit");

const comboServicesSlice = createSlice({
    name:'ComboServicesList',
    initialState:null,
    reducers:{
        addComboServiceList:(state, action)=>{
            return action.payload;
        },
        removeComboServiceList:(state)=>{
            return null;
        }
    }
});
export const {addComboServiceList, removeComboServiceList} = comboServicesSlice.actions;
export default comboServicesSlice.reducer;
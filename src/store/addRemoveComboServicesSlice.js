import { createSlice } from "@reduxjs/toolkit";

const addRemoveComboServicesSlice=createSlice(
    {
        name:'addRemoveComboServices',
        initialState:
        {
            serviceItems:[]
        },
        reducers:{
            addComboService:(state, action)=>{
                state.serviceItems.push(action.payload);
            },
            removeComboService:(state, action)=>{
                const index = state.serviceItems.indexOf(action.payload);
                console.log('index:', index);
                if(-1 !== index){
                    state.serviceItems.splice(index,1);
                }
            },
            clearComboService:(state, action)=>{
                state.serviceItems=[];
            }
        }
    }
);
export const {addComboService, removeComboService, clearComboService}= addRemoveComboServicesSlice.actions;
export default addRemoveComboServicesSlice.reducer;
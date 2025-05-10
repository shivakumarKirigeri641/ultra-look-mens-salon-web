import { createSlice } from "@reduxjs/toolkit";

const addRemoveStandardServicesSlice=createSlice(
    {
        name:'addRemoveStandardServices',
        initialState:
        {
            serviceItems:[],
            isReset:false
        },
        reducers:{
            addStandardService:(state, action)=>{
                state.serviceItems.push(action.payload);
            },
            removeStandardService:(state, action)=>{
                const index = state.serviceItems.indexOf(action.payload);
                if(-1 !== index){
                    state.serviceItems.splice(index,1);
                }
            },
            clearStandardService:(state, action)=>{                
                state.serviceItems = [];
            }
        }
    }
);
export const {addStandardService, removeStandardService, clearStandardService}= addRemoveStandardServicesSlice.actions;
export default addRemoveStandardServicesSlice.reducer;
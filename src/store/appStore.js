const { configureStore } = require("@reduxjs/toolkit");
import staffReducer from './staffSlice';
import adminReducer from './adminSlice';
const appStore = configureStore({
    reducer:{
        staff:staffReducer,        
        admin:adminReducer
    }
});
export default appStore;
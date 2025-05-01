const { configureStore } = require("@reduxjs/toolkit");
import staffReducer from './staffSlice';
import adminReducer from './adminSlice';
import ServiceListReducer from './serviceListSlice';
const appStore = configureStore({
    reducer:{
        staff:staffReducer,        
        admin:adminReducer,
        ServiceList: ServiceListReducer
    }
});
export default appStore;
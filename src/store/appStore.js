const { configureStore } = require("@reduxjs/toolkit");
import staffReducer from './staffSlice';
import adminReducer from './adminSlice';
import ServiceListReducer from './serviceListSlice';
import todaysummaryReducer from './todaysummarySlice';
import ComboServicesListReducer from './comboServicesSlice';
const appStore = configureStore({
    reducer:{
        staff:staffReducer,        
        admin:adminReducer,
        ServiceList: ServiceListReducer,
        todaysummary:todaysummaryReducer,
        ComboServicesList:ComboServicesListReducer
    }
});
export default appStore;
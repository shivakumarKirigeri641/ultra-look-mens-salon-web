const { configureStore } = require("@reduxjs/toolkit");
import staffReducer from './staffSlice';
const appStore = configureStore({
    reducer:{
        staff:staffReducer
    }
});
export default appStore;
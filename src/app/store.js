import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import holidayFormReducer from "../features/HolidayForm/holidayFormSlice.js";
import {holidayApi} from "../features/HolidayScreen/holidayApi.js";
export const store = configureStore({
    reducer: {
        holidayForm: holidayFormReducer,
        [holidayApi.reducerPath]: holidayApi.reducer
     },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(holidayApi.middleware)

});
setupListeners(store.dispatch);
export default store;
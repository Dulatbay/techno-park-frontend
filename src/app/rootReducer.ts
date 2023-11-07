import {combineReducers} from '@reduxjs/toolkit'
import {baseApi} from "@/f_shared/api";

export const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
})
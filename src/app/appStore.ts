import {configureStore} from "@reduxjs/toolkit";
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist'
import {rootReducer} from "@/app/rootReducer.ts";
import {baseApi} from "@/f_shared/api";
import {setupListeners} from "@reduxjs/toolkit/query";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
}

const makeStore = () =>{
    const store = configureStore({
        reducer: persistReducer(
            persistConfig,
            rootReducer
        ) as unknown as typeof rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(baseApi.middleware), // , invalidateAccessTokenListener.middleware TODO: create later
    })
    setupListeners(store.dispatch)
    return store;
}


export const appStore = makeStore()
export const persistedStore = persistStore(appStore)


export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
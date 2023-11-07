declare global {
    declare type RootState = import('./../src/app/appStore.ts').RootState
    declare type AppDispatch = import('./../src/app/appStore.ts').AppDispatch
}
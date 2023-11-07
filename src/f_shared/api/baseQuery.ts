import {fetchBaseQuery} from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
    baseUrl: "https://localhost:8080/api/",
    prepareHeaders: (headers, {getState}) => {
        // @ts-ignore
        const {token} = (getState() as RootState).session

        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        }

        return headers
    },
})
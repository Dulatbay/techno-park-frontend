import {createApi} from "@reduxjs/toolkit/query";
import {baseQueryWithReauth} from "@/f_shared/api/baseQueryWithReauth.ts";

export const baseApi = createApi({
    tagTypes: [],
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
})
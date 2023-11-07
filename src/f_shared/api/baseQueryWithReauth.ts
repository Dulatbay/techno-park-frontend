import {invalidateAccessToken} from './invalidateTokenEvent'
import {BaseQueryApi, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta} from "@reduxjs/toolkit/query";
import {QueryReturnValue} from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {baseQuery} from './baseQuery'

const AUTH_ERROR_CODES = new Set([401])


export async function baseQueryWithReauth(
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: {}
): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> {
    const result = await baseQuery(args, api, extraOptions)

    /**
     * 👇 ATTENTION: We can't use any thunk in direct mode,
     * coz it's FSD Violation:
     *
     * api.dispatch(logoutThunk()) // 👎
     *
     * So we dispatch f_shared event `invalidateAccessToken`,
     * which has subscribes via redux middleware in other layers.
     * See example in @/d_features/authentication/InvalidateAccessToken
     */
    if (
        typeof result.error?.status === 'number' &&
        AUTH_ERROR_CODES.has(result.error.status)
    ) {
        api.dispatch(invalidateAccessToken())
    }

    return result
}
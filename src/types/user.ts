export enum UserActionTypes {
    FETCH_USERS= 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}
type TFetchUsers = {
    type: UserActionTypes.FETCH_USERS
}
type TFetchedUsersSuccess = {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: any[]
}
type TFetchedUsersError = {
    type: UserActionTypes.FETCH_USERS_ERROR,
    payload: string
}
export type TUserAction = TFetchedUsersSuccess | TFetchedUsersError | TFetchUsers

export type TUserState = {
    users: any[],
    loading: boolean,
    error: null | string
}

export type TSingleUser = {
    id: number,
    name: string
}

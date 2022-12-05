import {Dispatch} from "redux";
import {authAPI} from "../api/api";


export type AuthorType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}


const initialState: AuthorType = {
    id: null,
    email: null,
    login: null,
    isAuth: false

}

type setUserDataAT = ReturnType<typeof setAuthUserData>


export type UsersActionType = setUserDataAT


export const authReducer = (state: AuthorType = initialState, action: UsersActionType): AuthorType => {

    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id: string | null, email: string | null, login: string | null) => {
    return {
        type: 'SET-USER-DATA',
        data: {id, email, login}
    } as const
}

export const setAuthUserDataThunk = () => {
    return (dispatch: Dispatch) => {
        authAPI.setAuth()
            .then((data) => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
})}}

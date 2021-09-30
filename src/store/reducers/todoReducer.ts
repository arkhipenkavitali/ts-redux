import {TodoActionTypes, TTodoAction, TTodoState} from "../../types/todo";

const initialState: TTodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
}
export const todoReducer = (state = initialState, action: TTodoAction): TTodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCHED_TODO:
            return {...state, loading: true}
        case TodoActionTypes.FETCHED_TODO_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TodoActionTypes.FETCHED_TODO_ERROR:
            return {...state, loading: false, error: action.payload}
        case TodoActionTypes.SET_TODO_PAGE:
            return {...state, page: action.payload}
        default: return state;
    }
}
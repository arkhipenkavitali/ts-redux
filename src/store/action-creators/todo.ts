import {Dispatch} from "redux";
import {TodoActionTypes, TTodoAction} from "../../types/todo";
import axios from "axios";

export const fetchedTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TTodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCHED_TODO})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            setTimeout(() => {
                dispatch({type: TodoActionTypes.FETCHED_TODO_SUCCESS, payload: response.data})
            }, 1000);
        } catch (error){
            dispatch({type: TodoActionTypes.FETCHED_TODO_ERROR, payload: 'Error in todos'})
        }
    }
}

export function setTodoPage(page: number): TTodoAction {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}
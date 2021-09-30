export type TTodoState = {
    todos: any[],
    loading: boolean,
    error: string | null,
    page: number,
    limit: number,
}
export enum TodoActionTypes {
    FETCHED_TODO= 'FETCHED_TODO',
    FETCHED_TODO_SUCCESS= 'FETCHED_TODO_SUCCESS',
    FETCHED_TODO_ERROR= 'FETCHED_TODO_ERROR',
    SET_TODO_PAGE= 'SET_TODO_PAGE',
}
type FetchedTodo = {
    type: TodoActionTypes.FETCHED_TODO
}
type FetchedTodoSuccess = {
    type: TodoActionTypes.FETCHED_TODO_SUCCESS,
    payload: any[]
}
type FetchedTodoError = {
    type: TodoActionTypes.FETCHED_TODO_ERROR,
    payload: string
}
type SetTodoPage = {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: number
}

export type TTodoAction = FetchedTodo | FetchedTodoSuccess | FetchedTodoError | SetTodoPage;


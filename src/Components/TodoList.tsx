import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {
    const {todos, loading, error, limit, page} = useTypedSelector(state => state.todo);
    const {fetchedTodos, setTodoPage} = useActions();
    const pages = [1,2,3,4,5]

    useEffect(() => {
        fetchedTodos(page, limit)
    }, [page]);

    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo => <div key={todo.id}>{todo.id} {todo.title}</div>)}
            {pages.map(p =>
                <div
                    onClick={() => setTodoPage(p)}
                    style={{display: "inline-flex", border: p === page ? '11px solid gray' : ''}}
                    >
                    {p}
                </div>)}
        </div>
    );
};

export default TodoList;
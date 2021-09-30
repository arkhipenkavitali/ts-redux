import React from 'react';
import UserList from "../UserList";
import TodoList from "../TodoList";

export const App: React.FC = () => {
  return (
    <div className="App">
        <UserList />
        <hr/>
        <TodoList />
    </div>
  );
}

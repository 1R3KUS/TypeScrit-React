import React, { FunctionComponent } from 'react';
import { AddTask, AllTasks } from './components';
import { ITodo } from './interfaces';

const App: FunctionComponent = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];

    setTodos(saved);
  }, []);

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    if (title) {
      const newState: ITodo = {
        title,
        id: Date.now(),
        completed: false,
      };
      setTodos([newState, ...todos]);
    }
  };

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    );
  };

  return (
    <div className="Todo-App">
      <div className="header">
        <div className="header__title">
          <h1>React/TypeScript</h1>
        </div>
        <div className="header__name">
          <h1>Все задачи:</h1>
        </div>
      </div>

      <AddTask addTodo={addTodo} />
      <AllTasks todos={todos} onRemove={removeTodo} onToggle={toggleHandler} />
    </div>
  );
};

export default App;

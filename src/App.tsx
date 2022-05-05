import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import { LocalStorageContextProvider } from './contexts/LocalStorageContext';

function App() {
  return (
    <div>
      <LocalStorageContextProvider>
        <h1>React Todo App</h1>
        <CreateTodo />
        <div>
          <h2>Todo List</h2>
          <TodoList />
        </div>
      </LocalStorageContextProvider>
    </div>
  );
}

export default App;

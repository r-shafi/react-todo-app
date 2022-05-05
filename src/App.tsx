import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import { LocalStorageContextProvider } from './contexts/LocalStorageContext';

function App() {
  return (
    <div className="px-4 md:max-w-screen-sm mx-auto">
      <LocalStorageContextProvider>
        <h1>React Todo App</h1>
        <CreateTodo />
        <div>
          <TodoList />
        </div>
      </LocalStorageContextProvider>
    </div>
  );
}

export default App;

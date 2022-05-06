import Tabs from './components/Tabs';
import TodoList from './components/TodoList';
import { LocalStorageContextProvider } from './contexts/LocalStorageContext';

function App() {
  return (
    <div className="px-4 md:max-w-screen-sm mx-auto">
      <LocalStorageContextProvider>
        <div className="my-4">
          <h1 className="font-bold uppercase mb-2">React Todo App</h1>
          <Tabs />
        </div>
        <div>
          <TodoList />
        </div>
      </LocalStorageContextProvider>
    </div>
  );
}

export default App;

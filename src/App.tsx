import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <h1>React Todo App</h1>
      {/* Section 1 - Create Todo*/}
      <CreateTodo />
      {/* Section 2 - Todo List Display */}
      {/* add filters probably */}
      <div>
        <h2>Todo List</h2>
        {/* Section 3 - Todo Item */}
        <TodoList />
      </div>
    </div>
  );
}

export default App;

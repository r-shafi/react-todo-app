interface Todo {
  id: number;
  text: string;
  completed: boolean;
  timestamp: number; // time | Date
}

const DUMMY_DATA: Todo[] = [
  {
    id: 1,
    text: 'Learn React',
    completed: false,
    timestamp: Date.now(),
  },
  {
    id: 2,
    text: 'Learn Redux',
    completed: false,
    timestamp: Date.now(),
  },
  {
    id: 3,
    text: 'Learn TypeScript',
    completed: false,
    timestamp: Date.now(),
  },
  {
    id: 4,
    text: 'Learn React Native',
    completed: false,
    timestamp: Date.now(),
  },
  {
    id: 5,
    text: 'Learn GraphQL',
    completed: false,
    timestamp: Date.now(),
  },
];

function App() {
  return (
    <div>
      <h1>React Todo App</h1>
      {/* Section 1 - Create Todo*/}
      <div>
        <label>
          New Todo:
          <input type="text" />
        </label>
        <button>Add New Todo</button>
      </div>
      {/* Section 2 - Todo List Display */}
      {/* add filters probably */}
      <div>
        <h2>Todo List</h2>
        {/* Section 3 - Todo Item */}
        {DUMMY_DATA.map((todo) => (
          <div key={todo.id}>
            <h3>{todo.text}</h3>
            <p>{new Date(todo.timestamp).toLocaleTimeString()}</p>
            <p>{new Date(todo.timestamp).toLocaleDateString()}</p>
            {/* Section 4 - User Interaction */}
            <button>Complete</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

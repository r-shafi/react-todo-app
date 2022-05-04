import { useState } from 'react';

export default function CreateTodo() {
  const [todo, setTodo] = useState('');

  const createTodo = () => {
    if (todo) {
      console.log('todo', todo);
    }
  };

  return (
    <div>
      <label>
        New Todo:
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </label>
      <button onClick={createTodo}>Add New Todo</button>
    </div>
  );
}

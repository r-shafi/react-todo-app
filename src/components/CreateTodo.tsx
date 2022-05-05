import { useState } from 'react';
import { GenerateID } from '../utilities/GenerateID';

export default function CreateTodo() {
  const [todo, setTodo] = useState('');

  const createTodo = () => {
    if (todo) {
      console.log('TODO:', {
        id: GenerateID(),
        title: todo,
        completed: false,
        timestamp: Date.now(),
      });
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

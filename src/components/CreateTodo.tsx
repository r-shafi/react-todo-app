import React, { useState } from 'react';
import { useLocalStorageContext } from '../hooks/useLocalStorageContext';
import { GenerateID } from '../utilities/GenerateID';

export default function CreateTodo() {
  const [todo, setTodo] = useState('');

  const { dispatch } = useLocalStorageContext();

  const createTodo = (event: React.FormEvent) => {
    event.preventDefault();

    if (todo) {
      dispatch({
        type: 'ADD',
        payload: {
          id: GenerateID(),
          title: todo,
          completed: false,
          timestamp: Date.now(),
        },
      });

      setTodo('');
    }
  };

  return (
    <form
      onSubmit={(e) => createTodo(e)}
      className="flex items-center gap-2 my-4"
    >
      <input
        type="text"
        placeholder="What Do You Need To Do?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="flex-1"
      />
      <button type="submit">Add New Todo</button>
    </form>
  );
}

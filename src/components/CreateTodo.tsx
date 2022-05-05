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
    }
  };

  return (
    <form onSubmit={(e) => createTodo(e)}>
      <label>
        New Todo:
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </label>
      <button type="submit">Add New Todo</button>
    </form>
  );
}

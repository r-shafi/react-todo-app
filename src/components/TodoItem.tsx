import { useLocalStorageContext } from '../hooks/useLocalStorageContext';
import { Todo } from '../models/Todo';

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const { dispatch } = useLocalStorageContext();

  const toggleComplete = () => {
    console.log('toggleComplete');
  };

  const deleteTodo = (id: string) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  return (
    <>
      <h3>{todo.title}</h3>
      <p>{new Date(todo.timestamp).toLocaleTimeString()}</p>
      <p>{new Date(todo.timestamp).toLocaleDateString()}</p>
      {/* Section 4 - User Interaction */}
      <button onClick={toggleComplete}>Complete</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </>
  );
}

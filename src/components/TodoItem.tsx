import { Todo } from '../models/Todo';

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const toggleComplete = () => {
    console.log('toggleComplete');
  };

  const deleteTodo = () => {
    console.log('deleteTodo');
  };

  return (
    <>
      <h3>{todo.title}</h3>
      <p>{new Date(todo.timestamp).toLocaleTimeString()}</p>
      <p>{new Date(todo.timestamp).toLocaleDateString()}</p>
      {/* Section 4 - User Interaction */}
      <button onClick={toggleComplete}>Complete</button>
      <button onClick={deleteTodo}>Delete</button>
    </>
  );
}

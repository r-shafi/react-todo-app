import { Todo } from '../models/Todo';

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  return (
    <>
      <h3>{todo.title}</h3>
      <p>{new Date(todo.timestamp).toLocaleTimeString()}</p>
      <p>{new Date(todo.timestamp).toLocaleDateString()}</p>
      {/* Section 4 - User Interaction */}
      <button>Complete</button>
      <button>Delete</button>
    </>
  );
}

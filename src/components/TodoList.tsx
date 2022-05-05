import { useLocalStorageContext } from '../hooks/useLocalStorageContext';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { state } = useLocalStorageContext();

  return (
    <div className="flex flex-col gap-4">
      {state && state.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
}

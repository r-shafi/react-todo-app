import { useLocalStorageContext } from '../hooks/useLocalStorageContext';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { state } = useLocalStorageContext();

  return (
    <>{state && state.map((todo) => <TodoItem key={todo.id} todo={todo} />)}</>
  );
}

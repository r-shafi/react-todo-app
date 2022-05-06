import { useLocalStorageContext } from '../hooks/useLocalStorageContext';

export default function SearchTodo() {
  const { dispatch } = useLocalStorageContext();

  const searchTodo = (query: string) => {
    dispatch({ type: 'SEARCH_TODO', payload: query });
  };

  return (
    <form className="flex items-center gap-2 my-4">
      <input
        type="text"
        placeholder="Search Todos"
        onChange={(e) => searchTodo(e.target.value)}
        className="flex-1"
      />
    </form>
  );
}

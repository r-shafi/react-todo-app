import check from '../assets/check.svg';
import bin from '../assets/delete.svg';
import undo from '../assets/undo.svg';
import { useLocalStorageContext } from '../hooks/useLocalStorageContext';
import { Todo } from '../models/Todo';

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const { dispatch } = useLocalStorageContext();

  const toggleComplete = (id: string) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: id });
  };

  const deleteTodo = (id: string) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  return (
    <div className="flex justify-between border-b-2 border-b-slate-100 pb-2">
      <div>
        <h3
          className={
            'text-lg font-bold uppercase ' +
            (todo.completed ? 'line-through text-slate-300' : '')
          }
        >
          {todo.title}
        </h3>
        <div className="flex gap-2 text-sm text-slate-500">
          <p>{new Date(todo.timestamp).toLocaleTimeString()}</p>
          <p>{new Date(todo.timestamp).toDateString()}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={() => toggleComplete(todo.id)}>
          {todo.completed ? (
            <img src={undo} alt="undo" />
          ) : (
            <img src={check} alt="check" />
          )}
        </button>
        <button className="delete" onClick={() => deleteTodo(todo.id)}>
          <img src={bin} alt="delete todo" />
        </button>
      </div>
    </div>
  );
}

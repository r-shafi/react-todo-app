import { Todo } from '../models/Todo';
import { GenerateID } from '../utilities/GenerateID';
import TodoItem from './TodoItem';

const DUMMY_DATA: Todo[] = [
  {
    id: GenerateID(),
    title: 'Learn React',
    completed: false,
    timestamp: Date.now(),
  },
  {
    id: GenerateID(),
    title: 'Learn Redux',
    completed: false,
    timestamp: Date.now(),
  },
  {
    id: GenerateID(),
    title: 'Learn TypeScript',
    completed: false,
    timestamp: Date.now(),
  },
  {
    id: GenerateID(),
    title: 'Learn React Native',
    completed: false,
    timestamp: Date.now(),
  },
  {
    id: GenerateID(),
    title: 'Learn GraphQL',
    completed: false,
    timestamp: Date.now(),
  },
];

export default function TodoList() {
  return (
    <>
      {DUMMY_DATA.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}

import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  timestamp: number; // time | Date
}

const DUMMY_DATA: Todo[] = [
  {
    id: 1,
    text: 'Learn React',
    completed: false,
    timestamp: Date.now(),
  },
  {
    id: 2,
    text: 'Learn Redux',
    completed: false,
    timestamp: Date.now(),
  },
  {
    id: 3,
    text: 'Learn TypeScript',
    completed: false,
    timestamp: Date.now(),
  },
  {
    id: 4,
    text: 'Learn React Native',
    completed: false,
    timestamp: Date.now(),
  },
  {
    id: 5,
    text: 'Learn GraphQL',
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

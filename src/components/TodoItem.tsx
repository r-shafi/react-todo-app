export default function TodoItem({ todo }: any) {
  return (
    <>
      <h3>{todo.text}</h3>
      <p>{new Date(todo.timestamp).toLocaleTimeString()}</p>
      <p>{new Date(todo.timestamp).toLocaleDateString()}</p>
      {/* Section 4 - User Interaction */}
      <button>Complete</button>
      <button>Delete</button>
    </>
  );
}

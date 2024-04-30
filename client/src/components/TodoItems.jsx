export default function TodoItems({ title, id, completed }) {
  return (
    <li key={id} className={completed ? "strike-through" : undefined}>
      {title}
    </li>
  );
}

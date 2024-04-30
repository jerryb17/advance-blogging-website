import { useLoaderData } from "react-router-dom";
import { getTodo } from "../api/todos";
import TodoItems from "../components/TodoItems";

function TodoList() {
  const todos = useLoaderData();
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItems key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
function loader({ request: { signal } }) {
  return getTodo({ signal });
}
export const TodoListRoute = {
  loader,
  element: <TodoList />,
};

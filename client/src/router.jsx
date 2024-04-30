import { Navigate, createBrowserRouter, useRouteError } from "react-router-dom";
import { postListRoute } from "./pages/PostList";
import { UserListRoute } from "./pages/UserList";
import { TodoListRoute } from "./pages/TodoList";
import { newPostRoute } from "./pages/NewPost";
import { postRoute } from "./pages/Post";
import { userRoute } from "./pages/User";
import { editPostRoute } from "./pages/EditPost";
import RootLayout from "./layouts/RootLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorMessage />,
        children: [
          { index: true, element: <Navigate to={"/posts"} /> },
          {
            path: "posts",
            children: [
              {
                index: true,
                ...postListRoute,
              },
              {
                path: ":postId",
                children: [
                  { index: true, ...postRoute },
                  { path: "edit", ...editPostRoute },
                ],
              },
              {
                path: "new",
                ...newPostRoute,
              },
            ],
          },
          {
            path: "users",
            children: [
              { index: true, ...UserListRoute },
              {
                path: ":userId",
                ...userRoute,
              },
            ],
          },
          { path: "todos", ...TodoListRoute },
          { path: "*", element: <h1>404 - Page Not Found</h1> },
        ],
      },
    ],
  },
]);
function ErrorMessage() {
  const error = useRouteError();
  return (
    <>
      <h1>Error - something went wrong</h1>
      {import.meta.env.MODE !== "production" && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  );
}

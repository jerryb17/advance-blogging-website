import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { getUsers } from "../api/users";
import { createPost } from "../api/posts";
import PostForm, { errorValidator } from "../components/PostForm";

export function NewPost() {
  const { state } = useNavigation();
  const errors = useActionData();
  const isSubmitting = state === "submitting";
  const users = useLoaderData();
  return (
    <>
      <h1 className="page-title">New Post</h1>
      <PostForm isSubmitting={isSubmitting} users={users} errors={errors} />
    </>
  );
}
function loader({ request: { signal } }) {
  return getUsers(signal);
}
async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");

  const errors = errorValidator({ title, userId, body });

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const post = await createPost(
    { title, body, userId },
    { signal: request.signal }
  );

  return redirect(`/posts/${post.id}`);
}
export const newPostRoute = {
  loader,
  action,
  element: <NewPost />,
};

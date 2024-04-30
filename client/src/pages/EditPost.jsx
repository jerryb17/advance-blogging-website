import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import PostForm, { errorValidator } from "../components/PostForm";
import { getUsers } from "../api/users";
import { getPost, updatePost } from "../api/posts";

function EditPost() {
  const errors = useActionData();
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";
  const { users, post } = useLoaderData();
  return (
    <>
      <h1 className="page-title">Edit Post</h1>
      <PostForm
        isSubmitting={isSubmitting}
        users={users}
        defaultValues={post}
        errors={errors}
      />
    </>
  );
}
async function loader({ request: { signal }, params: { postId } }) {
  const post = getPost(postId, { signal });
  const users = getUsers({ signal });
  return { post: await post, users: await users };
}
async function action({ request, params: { postId } }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const userId = formData.get("userId");
  const body = formData.get("body");

  const errors = errorValidator({ title, body, userId });

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const post = await updatePost(
    postId,
    { title, userId, body },
    { signal: request.signal }
  );

  return redirect(`/posts/${post.id}`);
}
export const editPostRoute = {
  loader,
  action,
  element: <EditPost />,
};

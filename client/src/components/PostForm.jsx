import { Form, Link } from "react-router-dom";
import FormGroup from "./FormGroup";

// eslint-disable-next-line react/prop-types
export default function PostForm({
  users,
  errors = {},
  isSubmitting,
  defaultValues = {},
}) {
  return (
    <Form method="post" className="form">
      <div className="form-row">
        <FormGroup errorMessage={errors.title}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={defaultValues.title}
            id="title"
          />
        </FormGroup>
        <FormGroup errorMessage={errors.userId}>
          <label htmlFor="userId">Author</label>
          <select name="userId" id="userId" defaultValue={defaultValues.userId}>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </FormGroup>
      </div>
      <div className="form-row">
        <FormGroup errorMessage={errors.body}>
          <label htmlFor="body">Body</label>
          <textarea
            name="body"
            id="body"
            defaultValue={defaultValues.body}
          ></textarea>
        </FormGroup>
      </div>
      <div className="form-row form-btn-row">
        <Link className="btn btn-outline" to={".."}>
          Cancel
        </Link>
        <button disabled={isSubmitting} className="btn">
          Save
        </button>
      </div>
    </Form>
  );
}
export function errorValidator({ title, body, userId }) {
  const errors = {};
  if (title === "") {
    errors.title = "Required";
  }
  if (body === "") {
    errors.body = "Required";
  }
  if (userId === "") {
    errors.userId = "Required";
  }
  return errors;
}

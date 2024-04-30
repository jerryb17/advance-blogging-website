import {
  Link,
  Outlet,
  ScrollRestoration,
  useNavigation,
} from "react-router-dom";

export default function RootLayout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";
  return (
    <>
      <nav className="top-nav">
        <Link style={{ textDecoration: "none", color: "white" }} to="posts">
          <div className="nav-text-large">My App</div>
        </Link>
        <ul className="nav-list">
          <li>
            <Link to="posts">Posts</Link>
          </li>
          <li>
            <Link to="users">Users</Link>
          </li>
          <li>
            <Link to="todos">Todos</Link>
          </li>
        </ul>
      </nav>
      <ScrollRestoration />
      {isLoading && <div className="loading-spinner" />}
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  );
}

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Aplicación</h1>
      <Link to="/users">Users</Link>
    </div>
  );
};

import { useNavigate } from "react-router-dom";

export const Users = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Users</h1>

      <button onClick={handleClick}>Salir</button>
    </div>
  );
};

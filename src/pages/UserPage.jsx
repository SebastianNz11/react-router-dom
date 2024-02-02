import { useParams } from "react-router-dom";

export const UserPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>User</h1>
      <h2>{id}</h2>
    </div>
  );
};

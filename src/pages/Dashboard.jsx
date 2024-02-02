import {Link, Outlet} from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <Link to="welcome">Bienvenido</Link>
        <Outlet/>
    </div>
  )
}

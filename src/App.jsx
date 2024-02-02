import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Users } from "./pages/Users";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import { UserPage } from "./pages/UserPage";
import {Dashboard} from './pages/Dashboard'

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/dashboard/" element={<Dashboard/>}>
            <Route path="welcome" element={<p>Welcome</p>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import UpdateBlog from "../pages/UpdateBlog";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <div className="appRouter relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="details/:id" element={<PrivateRouter />}>
          <Route path="" element={<Details />} />
        </Route>
        <Route path="profile" element={<PrivateRouter />}>
          <Route path="" element={<Profile />} />
        </Route>
        <Route path="newblog" element={<PrivateRouter />}>
          <Route path="" element={<NewBlog />} />
        </Route>
        <Route path="updateblog" element={<PrivateRouter />}>
          <Route path="" element={<UpdateBlog />} />
        </Route>
        <Route path="about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import claruswayIcon from "../assets/clwlogo.jpg";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { logOut } from "../helpers/firebase";

const Navbar = () => {
  // const [isCurrentUser, setIsCurrentUser] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { setDisplay, setMsg } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/login");
    setMsg('Logged out successfully');
    setDisplay(true);
  };

  return (
    <div className="navbar bg-secondary flex justify-between sticky top-0 z-10 ">
      <Link to="/">
        <div className="w-10 rounded-full">
          <img src={claruswayIcon} alt="clarusway" />
        </div>
      </Link>
      <Link to="/">
        <h1 className="h-full text-center text-2xl tracking-tighter cursor-pointer ">
          &lt;David Moses<span className="text-lime-600">Blog/&gt;</span>
        </h1>
      </Link>
      {currentUser ? (
        <div className="flex-none">
          <span className="hidden first-letter:inline first-letter:text-xl sm:inline" >{currentUser.email}</span>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="profile" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="profile">
                  <button>User Profile</button>
                </Link>
              </li>
              <li>
                <Link to="about">
                  <button>About Blog Owner</button>
                </Link>
              </li>
              <li>
                <Link to="newblog">
                  {" "}
                  <button className="flex justify-between w-40">
                    Blog <span className="badge">New</span>
                  </button>
                </Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="profile" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="login">
                  <button>Login</button>
                </Link>
              </li>
              <li>
                <Link to="register">
                  <button>Register</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
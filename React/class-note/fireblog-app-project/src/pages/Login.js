import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import { BlogContext } from "../contexts/BlogContext";
import { forgotPassword, signIn, signUpProvider } from "../helpers/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setMsg, setDisplay } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(email, password);
    signIn(email, password, navigate);
    setMsg("Logged in successfully");
    setDisplay(true);
  };

  const withGoogleSignUp = () => {
    signUpProvider(navigate);
  };

  const getNewPassword = () => {
    
    forgotPassword(email)
    setMsg("Please check your mail box!")
    setDisplay(true)
      // setMsg("Something went wrong");
      // setDisplay(true);
    
  }

  return (
    <div className="login bg-[url('https://picsum.photos/1600/900')] bg-cover h-screen ">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="p-6 bg-slate-400/60 text-white ">
                Welcome, I'm so glad you're here! You're now part of a growing
                community of developers and fans who create, collaborate and
                connect with each other all over the world via{" "}
                <br />
                <span className="block h-full text-center text-2xl tracking-tighter ">
                  <span className="text-lime-600">&lt;David Moses</span>
                  Blog/&gt;
                </span>
              </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="label">
                    <span
                      className="label-text-alt link link-hover"
                      onClick={() => getNewPassword(email) }
                    >
                      Forgot password? Enter your mail and click here!
                    </span>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
              <div className="form-control mt-6">
                <button
                  className="btn bg-secondary border-none "
                  onClick={withGoogleSignUp}
                >
                  with <img src={google} alt="google" className="w-20 p-2 " />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
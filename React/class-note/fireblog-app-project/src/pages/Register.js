import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import { BlogContext } from "../contexts/BlogContext";
import { createUser, signUpProvider } from "../helpers/firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setMsg, setDisplay } = useContext(BlogContext);

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(email, password);
    createUser(email, password);
    navigate("/");
    setMsg("Registered successfully");
    setDisplay(true);
  };

  const withGoogleSignUp = () => {
    signUpProvider(navigate);
  };

  return (
    <div className="register">
      <div className="login bg-[url('https://picsum.photos/1600/900')] bg-cover h-screen ">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
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
                <form onSubmit={handleRegister}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email"
                      className="input input-bordered"
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
                      required
                      placeholder="password"
                      className="input input-bordered"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
                <div className="form-control mt-6">
                  <button
                    className="btn bg-secondary border-none "
                    onClick={withGoogleSignUp}
                  >
                    with <img src={google} alt="google" className="w-20 p-2 " />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
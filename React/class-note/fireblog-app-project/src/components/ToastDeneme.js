import { useContext } from "react";
import { useEffect} from "react";
import { BlogContext } from "../contexts/BlogContext";

const ToastDeneme = () => {
  // console.log(props);
  const { display, setDisplay, msg } = useContext(BlogContext);
  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("asd");
      // console.log(display);
      clearInterval(interval);
      setDisplay(false);
    }, 3500);
  }, [display]);

  return (
    <div>
      { display && (<div className="toast toast-top toast-end z-20 ">
        <div className="alert alert-info">
          <div>
            <span className="text-white" >{msg}</span>
          </div>
        </div>
      </div>) 
      }
    </div>
  );
};

export default ToastDeneme;
import { ref, update } from "firebase/database";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../contexts/BlogContext";
import { db } from "../helpers/firebase";

const UpdateBlog = () => {
  const { blogAllInfo, newBlogTitle, setNewBlogTitle, newBlogImgUrl, setNewBlogImgUrl, newBlogContent, setNewBlogContent, clickedID, setAuthorEmailInfo, setMsg, setDisplay } = useContext(BlogContext);

  // console.log(currentUser);
  const navigate = useNavigate();
  // console.log(clickedID);

  const year = new Date().getFullYear().toString();
  const month = (new Date().getMonth() + 1).toString();
  const day = new Date().getDay().toString();
  let hours = new Date().toLocaleTimeString();
  console.log(hours);
  // const hour =new Date().getHours.toString();
  // const minute =new Date().getMinutes.toString();
  // const second =new Date().getSeconds.toString();

  const blogLastUpdateTime = day + '/' + month + '/' + year + ' ' + hours;
  console.log(blogLastUpdateTime);



  const handleUpdateBlog = (e, item) => {
    e.preventDefault();
    update(ref(db, `/${item.id}`), {
      newBlogTitle: newBlogTitle,
      newBlogImgUrl: newBlogImgUrl,
      newBlogContent: newBlogContent,
      blogLastUpdateTime: blogLastUpdateTime+" updated"  // DOM a basılacak
    });
    // console.log(newBlogTitle);
    // console.log(newBlogImgUrl);
    // console.log(newBlogContent);
    // console.log(item.authorEmail);
    setAuthorEmailInfo(item.authorEmail);
    navigate(`/details/${clickedID}`);
    setMsg('Updated successfully');
    setDisplay(true);
  };
   

  return (
    <div className="updateblog my-4 mx-2 flex flex-col justify-center items-center" >
      {blogAllInfo?.map((item, index) => {
        // console.log(item.id);
        return (
          <div key={item.id} className="max-w-screen-md">
            {item.id === clickedID && (
            <form onSubmit={(e) => handleUpdateBlog(e, item)} >
                <div className="card card-compact max-w-screen-md justify-between w-full bg-base-100 shadow-xl cursor-pointer  m-4 overflow-hidden ">
                  <div className="flex flex-col justify-center items-center ">
                    <figure>
                      <img src={newBlogImgUrl} alt={newBlogTitle} />
                    </figure>
                    <div className="flex flex-col overflow-hidden h-11/12 w-11/12 bg-base-100 ">
                      <div className="flex flex-col gap-8 my-4 ">
                        <div className="displayName w-full ">
                          <input
                            className="input text-center w-3/4"
                            type="text"
                            value={newBlogTitle}
                            onChange={(e) => setNewBlogTitle(e.target.value)}
                          />
                        </div>
                        <div className="displayEmail w-full ">
                          <input
                            className="input w-3/4"
                            type="text"
                            value={newBlogImgUrl}
                            onChange={(e) => setNewBlogImgUrl(e.target.value)}
                          />
                        </div>
                        <textarea
                          className="textarea prose prose-stone md:prose-base lg:prose-xl m-4 lg:resize-y h-80"
                          value={newBlogContent}
                          onChange={(e) => setNewBlogContent(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-actions justify-center mb-4">
                  <button
                    type="submit"
                    className="btn btn-secondary"
                  >
                    UPDATE
                  </button>
                </div>
              </form>
            )}
          </div>
        );
      })}

      {/*  */}
    </div>
  );
};

export default UpdateBlog;
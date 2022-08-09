import { ref, remove, update } from "database";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../contexts/BlogContext";
import { AuthContext } from "../contexts/AuthContext";
import { db } from "../helpers/firebase";

const Details = () => {
  const [commentInput, setCommentInput] = useState("");

  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);
  const {
    blogAllInfo,
    setNewBlogTitle,
    setNewBlogImgUrl,
    setNewBlogContent,
    setClickedID,
    clickedID,
    authorEmailInfo,
    setAuthorEmailInfo,
    setMsg,
    setDisplay,
  } = useContext(BlogContext);
  // console.log(currentUser.email);

  const handleDeleteBlog = (item) => {
    // console.log(item.id);
    remove(ref(db, `/${item.id}`));
    navigate("/");
    setMsg("Deleted successfully");
    setDisplay(true);
  };

  const handleInputToUpdate = (item) => {
    // console.log(item);
    setNewBlogTitle(item.newBlogTitle);
    setNewBlogImgUrl(item.newBlogImgUrl);
    setNewBlogContent(item.newBlogContent);
    setClickedID(item.id);
    setAuthorEmailInfo(item.email);
    navigate("/updateblog");
  };

  //icons
  const handleHeartClick = (item) => {
    if (
      item.id === clickedID &&
      !item.heart.liker.includes(currentUser.email)
    ) {
      update(ref(db, `/${item.id}`), {
        heart: {
          totalHeart: item.heart.totalHeart + 1,
          liker: [...item.heart.liker, currentUser.email],
        },
      });
    } else {
      setMsg("you can like this article once");
      setDisplay(true);
    }
    console.log(item.heart.totalHeart);
    console.log(item.heart.liker);
  };

  const handleComment = (e, item) => {
    e.preventDefault();
    // console.log("comment submitted");
    setCommentInput("");
    // console.log("visitor comment : ", commentInput);
    // console.log(item.id, clickedID);
    update(ref(db, `/${item.id}`), {
      comments: {
        visitorComment: [...item.comments.visitorComment, commentInput],
      },
    });
  };

  return (
    <div className="details my-4 mx-2 flex flex-col justify-center items-center ">
      {blogAllInfo?.map((item, index) => {
        return (
          <div key={index} className="">
            {item.id === clickedID && (
              <div>
                <div className="card card-compact max-w-screen-md justify-between w-full bg-base-100 shadow-xl mb-2 ">
                  <figure>
                    <img
                      className="w-full"
                      src={item.newBlogImgUrl}
                      alt={item.newBlogTitle}
                    />
                  </figure>
                  <div className="card-body w-11/12">
                    <h2 className="card-title font-ffAcme uppercase ">
                      {item.newBlogTitle}
                    </h2>
                    
                    {item.blogLastUpdateTime ? (
                      <p className="text-start">{item.blogLastUpdateTime}</p>
                    ) : (
                      <span className="text-start">{item.newBlogCreateTime}</span>
                    )}
                    <p className="text-start">{item.newBlogContent}</p>
                  </div>
                  <div className="card-actions justify-start items-center">
                    <div className="avatar">
                      <div className="w-8 rounded m-4 ">
                        <img
                          src="https://placeimg.com/192/192/people"
                          alt="Tailwind-CSS-Avatar-component"
                        />
                      </div>
                    </div>
                    <p>{item.authorEmail}</p>
                  </div>
                  <div className="cardfootericons flex items-center justify-start gap-2 m-2 ">
                    <div className="hearticon flex items-center justify-start gap-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={
                          item.heart.totalHeart
                            ? "fill-red-500 h-5 w-5 cursor-pointer"
                            : "fill-black h-5 w-5 cursor-pointer"
                        }
                        onClick={() => handleHeartClick(item)}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>{item.heart.totalHeart}</p>
                    </div>
                    <div className="chaticon flex items-center justify-start gap-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={
                          item.comments.visitorComment.length
                            ? "fill-emerald-500 h-5 w-5 "
                            : "fill-black h-5 w-5 "
                        }
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                      </svg>
                      <p>{item.comments.visitorComment.length}</p>
                    </div>
                  </div>
                </div>
                {currentUser.email === authorEmailInfo && (
                  <div className="card-actions w-full flex justify-evenly my-4 ">
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleInputToUpdate(item)}
                    >
                      UPDATE
                    </button>
                    <button
                      className="btn btn-error"
                      onClick={() => handleDeleteBlog(item)}
                    >
                      DELETE
                    </button>
                  </div>
                )}

                <form
                  className="form-control w-full m-2"
                  onSubmit={(e) => handleComment(e, item)}
                >
                  <input
                    type="text"
                    placeholder="comments here for 50 characters"
                    className="input input-bordered w-full mb-4 peer"
                    maxLength="50"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                  />
                  <p className="text-xs peer-invalid:visible text-lime-600 ">
                    please press enter to submit your comment
                  </p>
                </form>
                <div className="blockquote text-start ">
                  {item.comments.visitorComment?.map((eachComment, index) => {
                    return (
                      <blockquote
                        key={index}
                        className="odd:bg-emerald-100 m-4"
                      >
                        {eachComment}
                      </blockquote>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Details;
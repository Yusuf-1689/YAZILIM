
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";

const BlogForm = (props) => {
  // console.log(props);
  const { currentUser } = useContext(AuthContext);
  const { setClickedID, setAuthorEmailInfo, setDisplay, setMsg, blogAllInfo } =
    useContext(BlogContext);
  const {
    id,
    authorEmail,
    newBlogTitle,
    newBlogImgUrl,
    newBlogContent,
    newBlogCreateTime,
    blogLastUpdateTime,
  } = props;
  const navigate = useNavigate();

  const handleClickBlogForm = () => {
    setClickedID(id);
    setAuthorEmailInfo(authorEmail);
    navigate(`details/${id}`);
    if (!currentUser) {
      setMsg("please, login to see details");
      setDisplay(true);
    }
  };

  // console.log(heart);

  return (
    <div
      className="blogform card card-compact justify-between w-full bg-base-100 shadow-xl cursor-pointer "
      onClick={handleClickBlogForm}
      key={id}
    >
      <figure>
        <img
          className="w-full max-h-80"
          src={newBlogImgUrl}
          alt={newBlogTitle}
        />
      </figure>
      <div className="card-body w-full p-2">
        <h2 className="card-title font-ffAcme uppercase ">{newBlogTitle}</h2>

        {blogLastUpdateTime ? (
          <p className="text-start">{blogLastUpdateTime}</p>
        ) : (
          <span className="text-start">{newBlogCreateTime}</span>
        )}

        <p className="text-ellipsis overflow-hidden text-start h-14 ">
          {newBlogContent}
        </p>
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
        <p className="text-start truncate w-60 lg:w-70">{authorEmail}</p>
      </div>

      {blogAllInfo
        ?.filter((filtered) => filtered.id === id)
        .map((item, index) => {
          return (
            <div
              className="cardfootericons flex items-center justify-start gap-2 m-2 "
              key={index}
            >
              <div className="hearticon flex items-center justify-start gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={
                    item.heart.totalHeart
                      ? "fill-red-500 h-5 w-5"
                      : "fill-black h-5 w-5"
                  }
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
          );
        })}
    </div>
  );
};

export default BlogForm;
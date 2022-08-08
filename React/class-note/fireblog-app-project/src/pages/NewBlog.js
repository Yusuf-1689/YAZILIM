import { ref, set } from "firebase/database";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { uid } from "uid";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { db } from "../helpers/firebase";


const NewBlog = () => {
  const { currentUser } = useContext(AuthContext);
  const { newBlogTitle, setNewBlogTitle, newBlogImgUrl, setNewBlogImgUrl, newBlogContent, setNewBlogContent } = useContext(BlogContext);
  const navigate = useNavigate();


  const year = new Date().getFullYear().toString();
  const month = (new Date().getMonth() + 1).toString();
  const day = new Date().getDay().toString();

  const newBlogCreateTime = day + '/' + month + '/' + year;
  

  const writeToDatabase = (e) => {
    e.preventDefault();
    console.log('new article submitted');
    const uuid = uid();
    console.log(newBlogTitle, newBlogImgUrl, newBlogContent);
    set(ref(db, `/${uuid}`), {
      newBlogTitle: newBlogTitle,
      newBlogImgUrl: newBlogImgUrl,
      newBlogContent: newBlogContent, 
      id: uuid,
      "authorEmail": currentUser.email,
      newBlogCreateTime: newBlogCreateTime,
      comments: {
        visitorComment: ['nice, you have written your first article'],
      },
      heart: {
        totalHeart: 0,
        liker: [' '],
      },

    });

    setNewBlogTitle('');
    setNewBlogImgUrl('');
    setNewBlogContent('');
    navigate('/');
  }

  



  return (
    <div className="newblog m-4 overflow-hidden">
      <form 
      className="flex flex-col justify-center items-center "
      onSubmit={writeToDatabase}
      >
        <figure>
          <img src={newBlogImgUrl} alt={newBlogTitle} />
        </figure>
        <div className="flex flex-col overflow-hidden h-11/12 w-11/12 lg:w-6/12  bg-base-100 shadow-xl ">
          <div className="flex flex-col gap-6 my-4 w-full ">
            <div className="displayName w-full ">
              <input
                className="input text-center w-3/4"
                type="text"
                placeholder="write here title of article"
                value={newBlogTitle}
                onChange={(e) => setNewBlogTitle(e.target.value)}
              />
            </div>
            <div className="displayEmail w-full ">
              <input
                className="input w-3/4"
                type="text"
                placeholder="write here url of picture"
                value={newBlogImgUrl}
                onChange={(e) => setNewBlogImgUrl(e.target.value)}
              />
            </div>
            <textarea
              className="prose prose-stone md:prose-base lg:prose-xl textarea m-4 lg:resize-y "
              name="textarea"
              placeholder="write here body of article"
              value={newBlogContent}
              onChange={(e) => setNewBlogContent(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="form-control my-6 ">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
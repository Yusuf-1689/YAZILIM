import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const { userImgUrl, setUserImgUrl } = useContext(BlogContext);
  // console.log(currentUser);

  return (
    <div className="profile m-4 ">
      <div className="flex flex-col justify-center items-center gap-4 ">
        {userImgUrl ? (
          <div className="w-24 mask mask-hexagon">
            <img
              // src="https://placeimg.com/192/192/people"
              src={userImgUrl}
              alt="profile pic"
            />
          </div>
        ) : (
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
              <span className="text-3xl">K</span>
            </div>
          </div>
        )}

        <div className="displayEmail w-full ">
          <input
            className="input w-1/4"
            type="text"
            placeholder="write here url of picture"
            value={userImgUrl}
            onChange={(e) => setUserImgUrl(e.target.value)}
          />
        </div>
        <div className="displayName w-full ">
          <p>{currentUser.displayName}</p>
        </div>
        <div className="displayEmail w-full ">
          <p>{currentUser.email}</p>
          <p>{currentUser.emailVerified}</p>
          <p>
            <span>Last login time : </span>
            {currentUser.metadata.lastSignInTime}
          </p>
        </div>
        <div className="moreabout w-full ">
          <textarea
            className="textarea prose prose-stone md:prose-base lg:prose-xl m-4 lg:resize h-80 md:w-full "
            defaultValue={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae click to read more"
            }
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Profile;
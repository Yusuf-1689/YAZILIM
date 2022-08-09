import { onValue, ref } from "database";
import React, { createContext, useEffect, useState } from "react";
import { db } from "../helpers";

export const BlogContext = createContext(null);

const BlogContextProvider = ({ children }) => {
  const [blogAllInfo, setBlogAllInfo] = useState([]);
  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogImgUrl, setNewBlogImgUrl] = useState("");
  const [newBlogContent, setNewBlogContent] = useState("");
  const [clickedID, setClickedID] = useState('');
  const [authorEmailInfo, setAuthorEmailInfo] = useState('');
  const [heartCounter, setHeartCounter] = useState(0);
  const [display, setDisplay] = useState(false);
  const [msg, setMsg] = useState('');
  const [userImgUrl, setUserImgUrl] = useState('');


  useEffect(() => {
    try {
      onValue(ref(db), (snapshot) => {
        setBlogAllInfo([]);
        const data = snapshot.val();
        if (data !== null) {
          Object.values(data).map((singleBlog) => {
            return setBlogAllInfo((initialEmptyArray) => [
              ...initialEmptyArray,
              singleBlog,
            ]);
          });
        }
      });
    } catch (error) {
      console.error(error.message);
    }
  }, []);
  // console.log(blogAllInfo);

  return (
    <BlogContext.Provider
      value={{ blogAllInfo, newBlogTitle, setNewBlogTitle, newBlogImgUrl, setNewBlogImgUrl, newBlogContent, setNewBlogContent, clickedID, setClickedID, authorEmailInfo, setAuthorEmailInfo, heartCounter, setHeartCounter, display, setDisplay, msg, setMsg, userImgUrl, setUserImgUrl }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
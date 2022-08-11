import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../helpers/firebase";
import BlogForm from "./BlogForm";

const BlogCard = () => {

    const [blogAllInfo, setBlogAllInfo] = useState([]);
    // const { blogAllInfo, setBlogAllInfo } = useContext(BlogContext);
    
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
        
        <div className="blogcard grid sm:grid-cols-2 lg:grid-cols-4 gap-10 " >
            { blogAllInfo?.map((item, index) => {
                // console.log(item.heart);
                return <BlogForm 
                id={item.id}
                authorEmail={ item.authorEmail } 
                newBlogTitle={ item.newBlogTitle } 
                newBlogImgUrl={ item.newBlogImgUrl }
                newBlogContent={ item.newBlogContent }
                newBlogCreateTime={ item.newBlogCreateTime }
                key={index}
                heart={item.heart}
                comment={item.comments}
                blogLastUpdateTime={item.blogLastUpdateTime}
                
                /> 
            }) }
           
        </div>
     );
}
 
export default BlogCard;
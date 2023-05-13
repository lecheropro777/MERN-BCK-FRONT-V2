import { useState, useContext, createContext, useEffect } from "react";
import { getPostsRequests, createPostReques, deletePostRequests, updatePostRequests,getPostRequests } from "../api/posts";

const postContext = createContext();

export const usePosts=()=>{
    const context=useContext(postContext)
    return context
}

export const PostProvideer = ({ children }) => {

  const [posts, setPosts] = useState([]);

  const getPosts=async()=> {
     const res = await getPostsRequests()
     setPosts(res.data)
  }

  const createPost=async(post)=>{
    const res =await createPostReques(post)
    setPosts([...posts, res.data])
  }

  const deletePost = async (id) =>{
    const res=await deletePostRequests(id)
    console.log(res)
    setPosts(posts.filter((post)=> post._id!==id))
   }

   const updatePost = async (id) =>{
    const res=await updatePostRequests(id)
    console.log(res)
    setPosts(posts.filter((post)=> post._id!==id))
   }
   const getPost= async(id)=>{
    const res=await getPostRequests(id)
    return res.data
   }


  useEffect(() => {
    getPosts();
  }, []);


  return (
    <postContext.Provider
      value={{
        posts,
        getPosts, 
        createPost,
        deletePost,
        updatePost,
        getPost
      }}
    >
      {children}
    </postContext.Provider>
  );
};

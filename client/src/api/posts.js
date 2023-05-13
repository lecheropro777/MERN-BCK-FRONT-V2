import axios from "axios";

export const getPostsRequests = async () => await axios.get("/posts");

export const createPostReques = async (post) => await axios.post("/posts", post);

export const deletePostRequests = async id => await axios.delete('/posts/' + id);

export const getPostRequests=async (id) => await axios.get('/posts/'+ id)

export const updatePostRequests = async id => await axios.put('/posts/' + id);

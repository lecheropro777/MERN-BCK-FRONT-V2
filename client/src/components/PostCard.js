import toast from "react-hot-toast";
import { usePosts } from "../context/postContext";
import { useNavigate, useParams } from "react-router-dom";



export function PostCard({ post }) {

    const navigate=useNavigate()



    const{deletePost}=usePosts()

  const handleDelete = (_id) => {
    toast(
      (t) => (
        <div>
          <p className="text-white">Seguro que quieres eliminar? <strong>{_id}</strong></p>
          <div>
            <button onClick={()=> {
                deletePost(_id)
             toast.dismiss(t.id)
                }} className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-md mx-2">Eliminar</button>
            <button onClick={() => toast.dismiss(t.id)}className="bg-slate-400 hover: bg-slate-500 px-3 py-2 text-white rounded-md mx-2">Cancelar</button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#202020",
        },
      }
    );
  };


  return (
    <div  className=" gap-1 text-white  shadow-md shadow-black bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer">
      <h1 className="text-center ">{post.title}</h1>
      <h3 className="text-center ">{post.description}</h3>

      <div className="px-1 py-1 ">
        <button onClick={()=> navigate(`/posts/${post._id}`)}
          type="submit"
          className="bg-blue-600 text-sm text-left  px-2 rounded-md"
        >
          Editar
        </button>
        <button
          type="submit"
          onClick={()=>handleDelete(post._id)}
          className="bg-red-600 text-sm text-right px-2 rounded-md"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

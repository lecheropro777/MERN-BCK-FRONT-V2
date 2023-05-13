import { usePosts } from "../context/postContext";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";

export function HomePage() {
  const { posts } = usePosts();

  if (posts.length === 0)
    return (
      <div className="">
        <div className="">
          <Link
            className="text-white px-3 py-3 rounded bg-zinc-950 hover:bg-zinc-500 hover:cursor-pointer"
            to="/new"
          >
            Crear nueva publicacion
          </Link>
        </div>
        <br></br>
        <div>
          <h1 className="text-white">No hay publicaciones</h1>
        </div>
      </div>
    );

  return (
    <div>
      <Link
        className="text-white px-3 py-3 rounded bg-zinc-950 hover:bg-zinc-500 hover:cursor-pointer"
        to="/new"
      >
        Crear nueva publicacion
      </Link>
      <br></br>
      <br></br>

      <div className="grid grid-cols-2 gap-2">
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}

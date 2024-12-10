import useFetch from "./Usefetch";
import { useHistory, useParams } from "react-router-dom";
import { Blog } from "./type";

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // console.log(id);

  const history = useHistory();
  const {
    data: blogs,
    isPending,
    isError,
  } = useFetch<Blog[]>("http://localhost:8000/blogs");
  const blog = blogs ? blogs.find((blog) => blog.id === id) : null;

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog?.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading....</div>}
      {isError && <div>{isError} </div>}
      {blogs && (
        <article>
          <h1 className="text-3xl font-bold mb-1">{blog?.title}</h1>
          <p className="font-light">Written by {blog?.author}</p>
          <div className="text-pretty whitespace-pre-line break-words font-medium">{blog?.body}</div>
          <button onClick={handleDelete}>delete blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

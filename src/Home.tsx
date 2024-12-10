import BlogList from "./Bloglist";
import useFetch from "./Usefetch";
import { Blog } from "./type";

const Home: React.FC = () => {
  const {
    data: blogs,
    isPending,
    isError,
  } = useFetch<Blog[]>(" http://localhost:8000/blogs");

  return (
    <div className="home">
      {isError && <div>{isError}</div>}
      {!isError && isPending && <div className="loading">Loading....</div>}
      {!isPending && blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;

import useFetch from "./Usefetch";
import { useParams } from "react-router-dom";




const BlogDetails: React.FC<BlogListProps> = () => {
    const {id} = useParams<{id: string}>();
    console.log(id);
    
     
    const {data: blogs, isPending, isError} = useFetch('http://localhost:8000/blogs/' + id);
    const findBlog = blogs?.find((blog) => blog.id === Number(id) )
    return (
        <div className="blog-details" >
            <h1>Blog Details</h1>
            {isPending && <div>Loading....</div>}
            { isError && <div>{isError} </div>}
            {blogs && 
                <article>
                    <h1>{findBlog?.title}</h1>
                    <p>Written by { findBlog?.author }</p>
                    <div>{ findBlog?.body }</div>
                </article>
            }
        </div>
    );
}
 
export default BlogDetails;
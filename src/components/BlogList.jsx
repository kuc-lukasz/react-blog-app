import { Link } from "react-router-dom";

export const BlogList = ({ blogs, title, handleDelete }) => {
    return (
        <>
            <h1>{title}</h1>
            {blogs.map((blog) => {
                return (
                    <div key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <h5>Written by: {blog.author}</h5>
                        </Link>
                        <button onClick={() => handleDelete(blog.id)}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </>
    );
};

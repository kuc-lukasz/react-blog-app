import { Link } from "react-router-dom";
import { Button } from "../styles/styles.jsx";
export const BlogList = ({ blogs, title, handleDelete }) => {
    return (
        <>
            <h2 style={{ color: "#0b7981" }}>{title}</h2>
            {blogs.map((blog) => {
                return (
                    <div key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h3>{blog.title}</h3>
                            <h5>Written by: {blog.author}</h5>
                        </Link>
                        <Button isDelete onClick={() => handleDelete(blog.id)}>
                            Delete
                        </Button>
                    </div>
                );
            })}
        </>
    );
};

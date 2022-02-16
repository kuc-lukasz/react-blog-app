import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateBlogContainer } from "./styled/CreateBlog.styled";
import { Button } from "./styled/Button.styled";

export const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("Łukasz");
    const [pending, isPending] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, content, author };
        console.log(blog);
        isPending(false);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            console.log("Post added!!! ");
            isPending(true);
            navigate("/");
        });
    };

    return (
        <CreateBlogContainer>
            <h3>New Blog</h3>
            <form
                onSubmit={handleSubmit}
                action=""
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "300px",
                }}
            >
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <label htmlFor="content">Content</label>
                <textarea
                    name="content"
                    id=""
                    cols="30"
                    rows="10"
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                ></textarea>
                <label htmlFor="author">Author</label>
                <select
                    name="author"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Łukasz">Łukasz</option>
                    <option value="Dominika">Dominika</option>
                </select>
                {pending ? (
                    <Button>Add Blog</Button>
                ) : (
                    <Button>Adding ...</Button>
                )}
            </form>
        </CreateBlogContainer>
    );
};

export default CreateBlog;

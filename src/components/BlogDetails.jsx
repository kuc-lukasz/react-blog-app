import useFetch from "./useFetchHook";
import { useParams, useNavigate } from "react-router-dom";
import { BlogDetailsStyled } from "./styled/BlogDetailsStyle.styled.jsx";
import { Button } from "./styled/Button.styled";

export const BlogDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    console.log(params);
    const {
        data: blogs,
        isPending,
        error,
    } = useFetch("http://localhost:8000/blogs/" + params.id);

    const handleDelete = (id) => {
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE",
        }).then(() => {
            console.log("Post został usunięty");
            navigate("/");
        });
    };
    return (
        <>
            {error && <h3>We have some errors, try again later</h3>}
            {isPending && <div>Wczytywanie danych...</div>}
            {blogs && (
                <BlogDetailsStyled key={blogs.id}>
                    <h3>{blogs.title}</h3>
                    <p>{blogs.content}</p>
                    <p>{blogs.author}</p>
                    <Button
                        isDelete
                        onClick={() => {
                            handleDelete(blogs.id);
                        }}
                    >
                        Delete Blog
                    </Button>
                </BlogDetailsStyled>
            )}
        </>
    );
};

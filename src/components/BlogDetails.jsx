import useFetch from "./useFetchHook";
import { useParams, useNavigate } from "react-router-dom";

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
        <div>
            {error && <h3>We have some errors, try again later</h3>}
            {isPending && <div>Wczytywanie danych...</div>}
            {blogs && (
                <div key={blogs.id}>
                    <h3>{blogs.title}</h3>
                    <p>{blogs.body}</p>
                    <p>{blogs.author}</p>
                    <button
                        onClick={() => {
                            handleDelete(blogs.id);
                        }}
                    >
                        Delete Blog
                    </button>
                </div>
            )}
        </div>
    );
};

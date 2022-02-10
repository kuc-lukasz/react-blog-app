import { BlogList } from "./BlogList";
import useFetch from "./useFetchHook";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    const {
        data: blogs,
        pending,
        error,
        setRefresh,
    } = useFetch("http://localhost:8000/blogs");

    const handleDelete = (id) => {
        setRefresh(false);
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE",
        }).then(() => {
            navigate("/");
            setRefresh(true);
        });
    };
    return (
        <div>
            <h2>Home Page</h2>
            {error && <h3>We have some errors, try again later</h3>}
            {pending && <div>Wczytywanie danych</div>}
            {blogs && (
                <BlogList
                    blogs={blogs}
                    title="Blogs List"
                    handleDelete={handleDelete}
                />
            )}
        </div>
    );
};

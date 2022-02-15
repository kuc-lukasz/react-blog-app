import { BlogList } from "./BlogList";
import useFetch from "./useFetchHook";
import { useNavigate } from "react-router-dom";
import { HomeDiv } from "../styles/styles.jsx";

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
        <HomeDiv>
            {error && <h3>We have some errors, try again later</h3>}
            {pending && <div>Wczytywanie danych</div>}
            {blogs && (
                <BlogList
                    blogs={blogs}
                    title="Blogs List"
                    handleDelete={handleDelete}
                />
            )}
        </HomeDiv>
    );
};

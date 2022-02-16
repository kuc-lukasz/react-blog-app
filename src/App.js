import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { BlogDetails } from "./components/BlogDetails";
import CreateBlog from "./components/CreateBlog";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Container } from "./components/styled/styles.jsx";
import { GlobalStyles } from "./components/styled/GlobalStyles.jsx";

function App() {
    return (
        <>
            {/* Tworzymy globalny styl w którym będą rzeczy typu body itp. Do tego tworzymy nowy component w ./styled */}
            <GlobalStyles />

            <Container isLightBlue>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/create" element={<CreateBlog />} />
                        <Route path="/blogs/:id" element={<BlogDetails />} />
                    </Routes>
                </BrowserRouter>
            </Container>
        </>
    );
}

export default App;

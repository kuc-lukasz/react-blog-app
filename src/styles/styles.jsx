import styled from "styled-components";

export const Nav = styled.nav`
     padding: 20px;
    display: flex;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
    border-bottom: 1px solid #f2f2f2;
}
& > h1 {
    color: #0b7981;
}
& > div {
    margin-left: auto;
}
& > div > a {
    margin-left: 16px;
    text-decoration: none;
    padding: 6px;
    font-size: medium;
    font-weight: 600;
    color: #0b7981;
}
& > a:hover {
    color: #0b7981;
}
/* .content {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
} */
`;

export const HomeDiv = styled.div`
    padding: 20px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;
    & > div {
        text-align: left;
        background-color: #ffffff;
        box-shadow: 0px 0px 10px 1px #011011;
        border-radius: 5px;
        width: 550px;
        margin: 20px;
        padding: 20px;
    }
    & > div > a {
        text-decoration: none;
    }
    & > div > a > h3,
    h5 {
        color: #0b7981;
    }
`;
export const AppWrapper = styled.div`
    font-size: medium;
    text-align: center;
`;

export const Button = styled.button`
    background-color: ${({ isDelete }) => (isDelete ? "#6d0606" : "#810b0b")};
    color: white;
    font-size: medium;
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;

    &:hover {
        background-color: #490505;
    }
`;

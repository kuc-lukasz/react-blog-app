import styled from "styled-components";

export const BlogDetailsStyled = styled.div`
    padding: 20px 20px 50px 20px;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    text-align: center;
    box-shadow: 0px 0px 4px 0px #000000;
    color: #0b7981;
    background-color: white;
    border-radius: 10px;
    margin: 20px auto;
    position: relative;

    & > h3 {
        text-align: center;
    }

    & > p {
        text-align: justify;
    }
`;

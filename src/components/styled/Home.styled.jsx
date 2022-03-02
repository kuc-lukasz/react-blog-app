import styled from "styled-components";

export const HomeDiv = styled.div`
    padding: 20px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;

    & > div:hover {
        background-color: #fafafa;
    }
    & > div {
        text-align: left;
        background-color: #ffffff;
        box-shadow: 0px 0px 4px 0px #000000;
        border-radius: 5px;
        width: 80%;
        margin: 20px;
        padding: 20px;
        position: relative;
    }
    & > div > a {
        text-decoration: none;
    }
    & > div > a > h3,
    h5 {
        color: #0b7981;
        margin-top: 0px;
        padding-top: 0px;
    }
`;

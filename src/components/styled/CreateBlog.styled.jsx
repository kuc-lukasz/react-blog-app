import styled from "styled-components";

export const CreateBlogContainer = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 800px;

    margin: 0 auto;

    & > * {
        color: #0b7981;
        margin-top: 15px;
    }

    & > form {
        align-items: center;
        padding: 30px;
        box-shadow: 0px 0px 10px 5px #c1c1c1;
        border-radius: 10px;
    }
    & > form > label {
        margin: 15px 0 5px 0;
        font-weight: 600;
        font-size: medium;
    }
    & > form > input,
    textarea,
    select {
        min-width: 300px;
        min-height: 35px;
        border-radius: 10px;
        border: 1px solid #0b7981;
        text-align: center;
        outline: #0b7981;
        color: #0b7981;
    }
    & > form > input:focus,
    textarea:focus,
    select:focus {
        border: 2px solid #0b7981;
    }
`;

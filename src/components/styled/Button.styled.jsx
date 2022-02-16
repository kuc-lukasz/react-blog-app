import styled from "styled-components";

export const Button = styled.button`
    background-color: ${({ isDelete }) => (isDelete ? "#6d0606" : "#0b7981")};
    color: white;
    font-size: medium;
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin: 15px 0px 0px 0px;
    cursor: pointer;
    position: ${({ isDelete }) => (isDelete ? "absolute" : "")};
    bottom: 10px;
    right: 10px;

    &:hover {
        background-color: #490505;
        width: 102px;
        height: 42px;
    }
`;

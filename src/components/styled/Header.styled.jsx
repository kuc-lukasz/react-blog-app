import styled from "styled-components";

export const Nav = styled.nav`
     padding: 20px;
    display: flex;
    justify-content: baseline;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
    border-bottom: 1px solid #f2f2f2;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    background-color: #ffffff;
    
}
& > h1 {
    color: #0b7981;
    font-weight: 800;
    font-size: xx-large;
    margin-left: 50px;
   
}
& > div {
    margin-left: auto;
    margin-right: 50px;
    display: flex;
}
& > div > a {
    margin-left: 16px;
    text-decoration: none;
    padding: 6px;
    font-size: medium;
    font-weight: 600;
    color: #0b7981;
}
&>div > a:hover {
    color: #490505;
}
`;

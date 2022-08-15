import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid; 
    grid-template-rows: 116px auto; 
    grid-template-areas: 
    "header"
    "content";
`;


export const Content = styled.div`
    grid-area: "content";
    padding: 50px 123px;

    overflow-y: auto;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;


        > section {
            margin-bottom: 0;
        }

        > button {
        width: 207px;
        height: 48px;
        }

    }




`;
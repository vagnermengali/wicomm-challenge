import styled from "styled-components";

export const StyledNoMobile = styled.div`
    display: none;
    @media(max-width: 1230px) {
        display: flex;
        position: fixed;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--brand3);
        z-index: 9999999999999;
    }
`
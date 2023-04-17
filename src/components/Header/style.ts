import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledHeader = styled(motion.div)`
    width: 100%;
    position: fixed;
    z-index: 99999;
`

export const Container = styled.div`
    width: 1168px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DivTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--brand4);
    width: 100%;
    height: 32px;
    padding: 0 56px;
`

export const DivDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`

export const DivTextIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const IconHover = styled(motion.img)`
    width: 24px;
    height: 24px;
    cursor: pointer;
`

export const DivBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--brand3);
    width: 100%;
    height: 72px;
    padding: 0 56px;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72px;
`

export const DivIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
`


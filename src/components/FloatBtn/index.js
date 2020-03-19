import React from "react"
import styled from "styled-components"
import { animateScroll } from "react-scroll"
import { FaAngleUp } from "react-icons/fa"

const Container = styled.div`
    position: fixed;
    bottom: 6.5vh;
    right: 3vw;
    z-index: 99999;

    svg {
        fill: rgb(42, 128, 248);
        font-size: 2rem;
        cursor: pointer;
    }
`
const FloatBtn = () => {
    const onBtnClick = () => {
        animateScroll.scrollToTop()
    }

    return (
        <Container>
            <FaAngleUp onClick={onBtnClick} />
        </Container>
    )
}

export default FloatBtn

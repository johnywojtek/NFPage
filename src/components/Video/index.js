import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import video from '../../video/video.mp4';
import logo from '../../images/logoNeuroNFoundation.png';

const Container = styled.div`
    width: 100%;
    height: 93vh;
    position: relative;
`;
const DescContainer = styled.div`
    position: absolute;
    bottom: 10rem;
    left: 9rem;
    z-index: 5;
    width: 45rem;
`;
const Title = styled.div`
    text-transform: uppercase;
    font-size: 2.5rem;
    padding-bottom: 2.5rem;
    margin-bottom: 2rem;
    width: 60%;
    border-bottom: 1px solid ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.white};
`;
const Text = styled.div`
    text-transform: uppercase;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.white};
`;
const VideoWrapper = styled.video`
    width: 100%;
    height: 93vh;

    object-fit: fill;
`;

const Logo = styled.img`
    width: 19rem;
    position: absolute;
    top: 3rem;
    left: 4.5rem;
    z-index: 5;
`;

const Video = ({ children }) => {
    return (
        <Container>
            <Logo src={logo} />
            <DescContainer>
                <Title>Lorem impsum</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique id
                    magna id tempor. Nam eu turpis orci. In vestibulum purus nec augue consequat,
                    nec posuere sem fermentum. Suspendisse sit amet pharetra est, vel sodales dui.
                    Pellentesque mattis non nisi ac mattis.
                </Text>
            </DescContainer>
            <VideoWrapper muted loop autoPlay preload="auto" playsinline>
                <source src={video} type="video/mp4" />
            </VideoWrapper>
        </Container>
    );
};

export default Video;

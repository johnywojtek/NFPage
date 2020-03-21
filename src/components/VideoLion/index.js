import React from 'react';
import styled from 'styled-components';
import lion from '../../video/lion.mp4';

const Container = styled.div`
    width: 100%;
    height: 93vh;
    position: relative;
`;
const DescContainer = styled.div`
    position: absolute;
    top: 10rem;
    right: 9rem;
    z-index: 5;
    width: 45rem;
`;
const Title = styled.div`
    text-transform: uppercase;
    font-size: 5rem;

    margin-bottom: 2rem;
    text-align: right;
    font-weight: 200;
    letter-spacing: 1px;
    width: 100%;
    color: ${({ theme }) => theme.white};
`;
const Text = styled.div`
    font-size: 1.3rem;
    color: ${({ theme }) => theme.white};
    text-align: right;
    border-top: 1px solid ${({ theme }) => theme.white};
    padding-top: 2.5rem;
    padding-left: 2.5rem;
    width: 81 %;
    margin-left: auto;
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

const VideoLion = ({ children }) => {
    return (
        <Container>
            <DescContainer>
                <Title>Społeczne lwy</Title>
                <Text>
                    Pellentesque posuere, nulla vitae pellentesque mattis, ipsum risus dignissim
                    lectus, id efficitur turpis nibh vitae urna. Ut luctus ultrices leo, id iaculis
                    est dapibus ut. Pellentesque ultrices mollis mauris in egestas. Sed fermentum
                    eros id ligula consectetur rutrum.
                </Text>
            </DescContainer>
            <VideoWrapper muted loop autoPlay preload="auto" playsinline>
                <source src={lion} type="video/mp4" />
            </VideoWrapper>
        </Container>
    );
};

export default VideoLion;

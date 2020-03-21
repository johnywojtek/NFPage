import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 16rem 23rem 14rem 23rem;
    flex-direction: column;
    display: flex;

    justify-content: center;
`;

const Title = styled.h3`
    width: 60%;

    text-transform: uppercase;
    font-size: 5rem;
    padding-bottom: 2rem;
    margin-bottom: 2rem;

    font-weight: 200;
    border-bottom: 2px solid ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.blue2};
`;

const Text = styled.p`
    color: ${({ theme }) => theme.black};
    font-size: 1.6rem;
    font-weight: 500;
`;

const Idea = ({ title, desc }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Text>{desc}</Text>
        </Container>
    );
};

export default Idea;

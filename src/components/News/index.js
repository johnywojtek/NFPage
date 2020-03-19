import React from 'react';
import styled from 'styled-components';
import NewsItem from '../common/NewsItem';
const Container = styled.div`
    max-width: 90rem;
    margin: 10rem auto;
`;

const Title = styled.h3`
    text-transform: uppercase;
    font-size: 5rem;
    font-weight: 200;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.blue1};
    padding-bottom: 2rem;
    margin-bottom: 6rem;
    width: 55%;
    border-bottom: 1px solid ${({ theme }) => theme.gray4};
`;

const News = () => {
    return (
        <Container>
            <Title>Aktualności</Title>
            <NewsItem />
        </Container>
    );
};

export default News;

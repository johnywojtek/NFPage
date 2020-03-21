import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    display: flex;
    flex-direction: ${({ reversed }) => reversed && 'row-reverse'};
`;
const DescContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: ${({ reversed }) => (reversed ? 'right' : 'left')};

    justify-content: center;
    margin: 0 6rem;
`;
const Img = styled.img`
    height: 26rem;
    border-radius: 0.5rem;
`;
const DescTitle = styled.div`
    color: ${({ theme }) => theme.blue2};
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 2rem;
`;

const Text = styled.div`
    color: ${({ theme }) => theme.black};
    margin-bottom: 1.6rem;
    font-weight: 200;
`;
const Date = styled.div`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.black};
`;
const Line = styled.div`
    margin: 1rem auto;
    width: 28rem;
    height: 1px;
    background-color: ${({ theme }) => theme.gray4};
`;

const NewsItem = ({ title, desc, date, imgSrc, reversed }) => {
    return (
        <>
            <Container reversed={reversed}>
                <Img src={imgSrc} />
                <DescContainer reversed={reversed}>
                    <DescTitle>{title}</DescTitle>
                    <Text>{desc}</Text>
                    <Date>{date}</Date>
                </DescContainer>
            </Container>
            <Line />
        </>
    );
};

NewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    date: PropTypes.string,
    imgSrc: PropTypes.string,
    reversed: PropTypes.bool,
};

NewsItem.defaultProps = {
    imgSrc: 'https://picsum.photos/250',
    date: '01.01.2020',
};

export default NewsItem;

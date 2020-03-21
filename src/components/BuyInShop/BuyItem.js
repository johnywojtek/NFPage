import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
    text-align: right;
    margin: 6rem 4rem 6rem 13rem;
`;
const Title = styled.h3`
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 200;
    margin-bottom: 3rem;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.blue1};
`;
const Desc = styled.p`
    font-size: 2.5rem;
    font-weight: 100;
    color: ${({ theme }) => theme.black};
`;

const BuyItem = ({ title, desc }) => {
    return (
        <ItemContainer>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
        </ItemContainer>
    );
};

export default BuyItem;

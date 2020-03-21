import React from 'react';
import styled from 'styled-components';
import BuyItem from './BuyItem';
import itemList from './itemsList';
import joinSVG from '../../images/join-svg.svg';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100vw;
`;
const DescContainer = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.gray1};
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
`;
const Image = styled.img`
    width: 35rem;
    height: 30rem;
    position: sticky;
    top: calc(50vh - 15rem);
`;
const SocialMedia = () => {
    return (
        <Container>
            <DescContainer>
                {itemList.map(({ title, desc }) => (
                    <BuyItem title={title} desc={desc} />
                ))}
                <BuyItem />
            </DescContainer>
            <ImageContainer>
                <Image src={joinSVG} />
            </ImageContainer>
        </Container>
    );
};

export default SocialMedia;

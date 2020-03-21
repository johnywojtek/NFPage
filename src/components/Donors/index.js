import React from 'react';
import styled from 'styled-components';

import donors from '../../images/donors.svg';

const Container = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
    width: 100vw;
    padding: 5rem 16rem 10rem 16rem;
    background-color: ${({ theme }) => theme.gray2};
`;
const DescContainer = styled.div``;

const Title = styled.h3`
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 200;
    margin-bottom: 6 rem;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.black};
`;
const DonorsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem 18rem;
`;

const Image = styled.img`
    width: 35rem;
    height: 26rem;
    margin-left: auto;
`;

const Donor = styled.p`
    font-size: 1.6rem;
    color: ${({ theme }) => theme.blue1};
`;
const SocialMedia = () => {
    return (
        <Container>
            <DescContainer>
                <Title>Nasi najhojniejsi darczyńcy</Title>
                <DonorsContainer>
                    <Donor>Firma dolor sit amet</Donor>
                    <Donor>Firma dolor sit amet</Donor>
                    <Donor>Firma dolor sit amet</Donor>
                    <Donor>Firma dolor sit amet</Donor>
                    <Donor>Firma dolor sit amet</Donor>
                    <Donor>Firma dolor sit amet</Donor>
                    <Donor>Firma dolor sit amet</Donor>
                    <Donor>Firma dolor sit amet</Donor>
                </DonorsContainer>
            </DescContainer>
            <Image src={donors} />
        </Container>
    );
};

export default SocialMedia;

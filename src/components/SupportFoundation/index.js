import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.gray2};
`;

const Title = styled.h3`
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 200;
    margin: 0 auto;
    padding-top: 3rem;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.black};
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const SubTitle = styled.span`
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 200;
    margin: 0 auto;
    margin-bottom: 3rem;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.black};
`;
const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.4rem;
    margin: 4rem 6rem;
    width: 26rem;
    height: 4.8rem;
    font-size: 1.3rem;
    font-weight: 600;
    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
`;

const SocialMedia = () => {
    return (
        <Container>
            <Title>Wesprzyj fundację</Title>
            <ButtonContainer>
                <Button>WPŁAĆ NA KONTO</Button>
                <Button>PRZEKAŻ 1% PODATKU</Button>
                <Button>Sprawdź inne opcje</Button>
            </ButtonContainer>
            <SubTitle>Nasz numer krs: 0000123512</SubTitle>
        </Container>
    );
};

export default SocialMedia;

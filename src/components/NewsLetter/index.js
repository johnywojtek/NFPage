import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 20rem;
    background-color: ${({ theme }) => theme.gray2};
`;

const Title = styled.h3`
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 200;
    margin-right: 25rem;

    letter-spacing: 1px;
    color: ${({ theme }) => theme.black};
`;
const EmailContainer = styled.div`
    width: 25%;
`;

const InputTitle = styled.span`
    font-size: 1.3rem;

    color: ${({ theme }) => theme.gray4};
`;

const InputContainer = styled.div`
    display: flex;
    margin-top: 2rem;
`;
const Input = styled.input`
    width: 100%;
    margin-right: 2rem;
    border-radius: 0.4rem;
    border: 1px solid ${({ theme }) => theme.gray4};
    padding-left: 2rem;
    font-size: 1.3rem;
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.4rem;
    width: 12rem;
    height: 4rem;
    font-size: 1.3rem;
    background-color: ${({ theme }) => theme.gray4};
    color: ${({ theme }) => theme.white};
`;

const SocialMedia = () => {
    return (
        <Container>
            <div>
                <Title>Chcesz być na bieżąco?</Title>
                <Title>DOŁĄCZ DO NEWSLETTERA</Title>
            </div>

            <EmailContainer>
                <InputTitle>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                </InputTitle>
                <InputContainer>
                    <Input placeholder="Adres e-mail" />
                    <Button>Zapisz się</Button>
                </InputContainer>
            </EmailContainer>
        </Container>
    );
};

export default SocialMedia;

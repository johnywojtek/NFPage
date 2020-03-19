import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

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
    margin-right: 30rem;

    letter-spacing: 1px;
    color: ${({ theme }) => theme.black};
`;
const IconsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 8rem;
`;
const IconContainer = styled.a`
    display: flex;
    align-items: flex-end;
    text-decoration: none;
    color: ${({ theme }) => theme.gray4};
    margin-bottom: ${({ isLast }) => (isLast ? '0rem' : '2rem')};

    svg {
        font-size: 2.5rem;
    }
`;

const IconName = styled.span`
    font-size: 1.6rem;
    margin-bottom: 1px;
    margin-left: 3rem;
`;
const SocialMedia = () => {
    return (
        <Container>
            <div>
                <Title>Nasze media </Title>
                <Title>społecznościowe</Title>
            </div>

            <IconsContainer>
                <IconContainer href="#">
                    <FaFacebookF />
                    <IconName>Facebook</IconName>
                </IconContainer>
                <IconContainer href="#">
                    <FaYoutube />
                    <IconName>Youtube</IconName>
                </IconContainer>
                <IconContainer href="#">
                    <FaInstagram />
                    <IconName>Instagram</IconName>
                </IconContainer>
                <IconContainer href="#">
                    <FaLinkedinIn />
                    <IconName>Linkedin</IconName>
                </IconContainer>
                <IconContainer isLast href="#">
                    <FaTwitter />
                    <IconName>Twitter</IconName>
                </IconContainer>
            </IconsContainer>
        </Container>
    );
};

export default SocialMedia;

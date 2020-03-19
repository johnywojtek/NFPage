import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import notFound from '../images/404.svg';
import Button from '../components/common/Buttons';

const Container = styled.div`
    height: 100%;
    margin: 15vh 0 2vh 10vw;
    @media screen and (max-width: 600px) {
        margin: 8vh auto;
        width: 70vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
const Title = styled.h3`
    font-size: 2.3rem;
    color: #0e196e;
    @media screen and (max-width: 600px) {
        margin: 2rem 0;
    }
`;
const Desc = styled.p`
    font-size: 1.4rem;
    color: #717171;
    text-transform: uppercase;
    margin-bottom: 2rem;
    width: 35vw;
    margin-top: 1rem;
    @media screen and (max-width: 900px) {
        width: 50vw;
    }
    @media screen and (max-width: 600px) {
        width: 100%;
        margin-bottom: 3rem;
    }
`;
const Image = styled.img`
    margin-top: 1rem;
    margin-left: -2rem;
    height: 24vh;
    @media screen and (max-width: 600px) {
        margin-left: 0;
    }
    @media screen and (max-width: 600px) {
        order: -1;
    }
`;
const NotFoundPage = () => {
    const intl = useIntl();

    return (
        <>
            <Container>
                <Title>Oops! This Page Could Not Be Found :(</Title>
                <Image src={notFound} />
                <Desc>
                    sorry but the page you are looking for does not exist. have been removed. name
                    changed or is temporarily unavailable
                </Desc>
                <Button btnText="GO TO HOMEPAGE" isBlack btnLink="/" isNotExternal />
            </Container>
        </>
    );
};
export default NotFoundPage;

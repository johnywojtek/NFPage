import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Container = styled.div`
    /* height:; */
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #151515;
    z-index: 12312312312;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    padding: 1.5rem;
`;
const Text = styled.p`
    color: #fff;
    margin-right: 2rem;
`;

const Btn = styled.button`
    background-color: transparent;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    outline: none;
    border: 0.1rem solid #fff;
    padding: 0.5rem;
    border-radius: 3px;
    font-size: 1.4rem;

    text-transform: uppercase;
    cursor: pointer;

    transition: all 0.3s ease;
    :hover {
        background-color: #555555;
    }
`;
const Cookie = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookieStatus = cookies.get('cookieConsent_status');

        if (!cookieStatus) {
            setIsVisible(true);
        }
    }, []);

    const onButtonClick = () => {
        cookies.set('cookieConsent_status', true, { path: '/' });
        setIsVisible(false);
    };

    return isVisible ? (
        <Container>
            <Text>
                Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym poziomie. Dalsze
                korzystanie ze strony oznacza, że zgadzasz się na ich użycie.
            </Text>
            <Btn onClick={onButtonClick}>Zgoda</Btn>
        </Container>
    ) : null;
};

export default Cookie;

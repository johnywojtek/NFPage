import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import PropTypes from 'prop-types';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    padding-left: ${({ footer }) => footer || '1.6rem'};
    animation: ${props => (props.anim ? '0.6' : '0')}s ${fadeIn} ease-out;
`;

const ListItem = styled.li``;

const Wrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    white-space: pre;
    @media screen and (max-width: 900px) {
        padding-bottom: 3rem;
        justify-content: center;
        &.socialmedia {
            padding-bottom: 0rem;
            justify-content: flex-start;
        }
    }
    @media screen and (max-width: 479px) {
        &.socialmedia {
            justify-content: center;
            padding-bottom: 1.5rem;
        }
    }
    li:first-child {
        svg {
            margin-left: ${({ footer }) => (footer ? '0' : '1rem')};
        }
    }
`;
const ListLink = styled.a`
    color: ${({ darkFooter, theme }) => (darkFooter ? 'rgba(255, 255, 255, 0.85)' : theme.black)};
    text-decoration: none;
    cursor: pointer;

    & > svg {
        font-size: ${({ footer }) => (footer ? '1.5rem' : '1.3rem')};
        margin: 0 1rem;
    }
`;
const SocialIcons = ({ darkFooter, footer, anim }) => {
    const socialmediaMenu = [
        {
            path: '',
            icon: FaFacebookSquare,
        },
        {
            path: '',
            icon: FaTwitter,
        },
        {
            path: '',
            icon: FaInstagram,
        },
        {
            path: '',
            icon: FaYoutube,
        },
        {
            path: '',
            icon: FaLinkedin,
        },
    ];

    const menuItems = socialmediaMenu.map((menuItem, index) => {
        return (
            <ListItem key={index}>
                <ListLink footer={footer} darkFooter={darkFooter}>
                    <menuItem.icon />
                </ListLink>
            </ListItem>
        );
    });
    return (
        <Container anim={anim} footer={footer}>
            <Wrapper footer={footer} className="socialmedia">
                {menuItems}
            </Wrapper>
        </Container>
    );
};

SocialIcons.propTypes = {
    anim: PropTypes.bool,
    footer: PropTypes.bool,
    darkFooter: PropTypes.bool,
};

export default SocialIcons;

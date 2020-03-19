import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby-plugin-intl';
import { subpageLinks } from '../common/subpageLinks';

const Container = styled.div`
    height: 5.6rem;
    min-height: 5.6rem;
    background-color: ${({ theme }) => theme.gray2};
    /* filter: blur(1px); */
    opacity: 0.5;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    width: 100%;
    padding-right: 1.6rem;
    top: 5rem;
    left: 0;
    z-index: 3;

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

const StyledLink = styled.a`
    color: ${({ theme }) => theme.white};
    text-decoration: none;
    padding: 1.2rem 0.8rem;

    text-transform: uppercase;

    border: none;
    font-size: 1.6rem;
    line-height: 1;

    @media screen and (max-width: 1050px) {
        padding: 1.2rem 0.6rem;
    }
`;

const NavSecondary = () => {
    return (
        <Container>
            {subpageLinks.map((e, i) => {
                return (
                    <StyledLink as={Link} key={i} to={e.path}>
                        {e.text}
                    </StyledLink>
                );
            })}
        </Container>
    );
};
export default NavSecondary;

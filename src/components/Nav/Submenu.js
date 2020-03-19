import React from 'react';
import styled, { css } from 'styled-components';
import KrsBtns from '../common/KrsBtns';
import PropTypes from 'prop-types';

const SubmenuWrapper = styled.ul`
    width: 17rem;

    left: 48%;
    transform: translateX(-50%);
    position: absolute;
    background-color: #0e0e0e;
    z-index: 99999999999999999999999999999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${props =>
        props.krs &&
        css`
            width: 15rem;
            padding: 0.5rem;
        `}
`;

const SubmenuListItem = styled.li`
    margin: 1.6rem 0;
    list-style-type: none;
    &:first-child {
        margin-top: 2.4rem;
    }

    ${props =>
        props.flex &&
        css`
            margin: 0.2rem 0;

            display: flex;
            justify-content: space-between;
            align-items: center;
            svg {
                margin: 0.4rem 1.5rem;

                color: rgba(255, 255, 255);
                font-size: 1.7rem;
                &:hover {
                    color: rgba(255, 255, 255, 0.45);
                }
            }
        `}
`;
const StyledText = styled.span`
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    cursor: initial;
    font-size: 1.4rem;

    ${props =>
        props.isSecond &&
        css`
            font-size: 1.7rem;
            letter-spacing: 1px;
        `}
`;
const StyledLink = styled.a`
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    padding: 1.2rem 0.8rem;

    cursor: pointer;
    &:hover {
        color: #2a80f8;
    }
    ${props =>
        props.flex &&
        css`
            padding: 0;
            cursor: initial;
        `}
`;

const Submenu = ({ krs, data }) => {
    if (krs) {
        return (
            <SubmenuWrapper right krs={krs}>
                {data.map((e, i) => {
                    return (
                        <SubmenuListItem key={i} flex>
                            <StyledText flex isSecond={i === 1}>
                                {e.text}
                            </StyledText>
                        </SubmenuListItem>
                    );
                })}
                <SubmenuListItem flex>
                    <KrsBtns />
                </SubmenuListItem>
            </SubmenuWrapper>
        );
    }
    return (
        <SubmenuWrapper>
            {data.map((e, i) => {
                return (
                    <SubmenuListItem key={i}>
                        <StyledLink href={e.path}>{e.text}</StyledLink>
                    </SubmenuListItem>
                );
            })}
        </SubmenuWrapper>
    );
};

Submenu.propTypes = {
    krs: PropTypes.bool,
    data: PropTypes.array,
};
export default Submenu;

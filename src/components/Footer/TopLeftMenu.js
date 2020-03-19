import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';

const ListItem = styled.li`
    font-size: 1.25rem;
    padding: 0 1rem;
    &:first-of-type {
        padding-left: 0;
    }
`;

const ListLink = styled.a`
    color: ${({ darkFooter, theme }) => (darkFooter ? theme.white : theme.black)};
    text-decoration: none;
    padding: 0 0.5rem;
    cursor: pointer;
    &:first-of-type {
        padding-left: 0;
    }
    &:hover {
        color: ${({ darkFooter, theme }) => (darkFooter ? theme.white : theme.black)};
        transition: 250ms all ease;
    }
    svg {
        font-size: 1.5rem;
    }
`;

const TopLeftMenu = ({ darkFooter }) => {
    const menuItems = [
        {
            name: 'shop',
            path: '',
        },
        {
            name: 'download',
            path: '',
        },
        {
            name: 'support',
            path: '',
        },
        {
            name: 'contact',
            path: '',
        },
    ];

    return menuItems.map((menuItem, index) => {
        return (
            <ListItem key={index}>
                <ListLink darkFooter={darkFooter} href={menuItem.path}>
                    <FormattedMessage id={`general.${menuItem.name}`} />
                </ListLink>
            </ListItem>
        );
    });
};

TopLeftMenu.propTypes = {
    darkFooter: PropTypes.bool,
};

export default TopLeftMenu;

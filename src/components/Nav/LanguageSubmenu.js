import React from 'react';
import styled from 'styled-components';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const SubmenuWrapper = styled.ul`
    width: 100%;
    left: 0;
    position: absolute;
    background-color: #0e0e0e;
    z-index: 99999999999999999999999999999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const SubmenuListItem = styled.li`
    margin: 1.6rem 0;
    list-style-type: none;
    &:first-child {
        margin-top: 2.4rem;
    }
    span {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        padding: 1.2rem 0.8rem;

        cursor: pointer;
    }
    &:hover {
        span {
            color: #2a80f8;
        }
    }
`;

const LanguageSubmenu = () => {
    return (
        <SubmenuWrapper>
            <IntlContextConsumer>
                {({ languages, language: currentLocale }) =>
                    languages
                        .filter(e => e !== currentLocale)
                        .map(language => (
                            <SubmenuListItem key={language}>
                                <span onClick={() => changeLocale(language)}>
                                    {language.toUpperCase()}
                                </span>
                            </SubmenuListItem>
                        ))
                }
            </IntlContextConsumer>
        </SubmenuWrapper>
    );
};
export default LanguageSubmenu;

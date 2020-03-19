import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { IntlContextConsumer, Link, useIntl } from 'gatsby-plugin-intl';
import { FaSearch, FaShoppingCart, FaDownload, FaAngleDown, FaHeart } from 'react-icons/fa';
import SocialMediaIcons from '../common/SocialMediaIcons';
import LanguageSubmenu from './LanguageSubmenu';
import Search from './Search';
import Submenu from './Submenu';
import { projectLinks } from '../common/projectLinks';
import oneIcon from '../../images/1.svg';
const documentGlobal = typeof document !== 'undefined';

const StyledLink = styled(props => <Link {...props} />)`
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    padding: 1.2rem ${props => (props.rightNav ? '1rem' : '1.4rem')};
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
        margin-left: 1rem;
    }
`;

const SearchBtn = styled.span`
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    padding: 1.2rem 1.4rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
        margin-left: 1rem;
    }
`;

const Container = styled.div`
    height: 4.3rem;
    min-height: 5rem;
    /* z-index: 20; */
    background-color: #0e0e0e;
    line-height: 1.5;
    display: flex;
    justify-content: space-between;
    /* position: relative; */
    @media screen and (max-width: 900px) {
        display: none;
    }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const MiddleNav = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5rem;
    height: 100%;
    animation: ${props => (props.anim ? '0.6' : '0')}s ${fadeIn} ease-out;

    @media screen and (max-width: 1000px) {
        margin-left: 0rem;
    }
`;

const DropdownLinkItem = styled.div`
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.85);
    svg {
        margin-left: 0.5rem;
    }
    img {
        width: 19px;
        height: 19px;
        /* transform: translateY(1px); */
        margin-left: 0.5rem;
    }
`;

const RightNav = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding-right: 1.6rem;
    animation: ${props => (props.anim ? '0.6' : '0')}s ${fadeIn} ease-out;
`;

const DropdownLink = styled.li`
    color: ${props => props.color};
    text-decoration: none;
    list-style-type: none;
    padding: 1.2rem ${props => (props.rightNav ? '1rem' : '1.4rem')};
    cursor: pointer;
    position: relative;
`;
const NavPrimary = ({ projectsList }) => {
    const [showLangMenu, setShowLangMenu] = useState(false);
    const [showProjectMenu, setShowProjectMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showKRSMenu, setShowKRSMenu] = useState(false);
    const [firstLoad, setFirstLoad] = useState(false);

    useEffect(() => {
        // Update the document title using the browser API

        setTimeout(() => {
            setFirstLoad(true);
        }, 1000);
    });

    if (documentGlobal) {
        if (showSearch) {
            document.body.style.overflowY = 'scroll';
            document.body.style.width = '100%';
            document.body.style.position = 'fixed';
        } else if (!showSearch) {
            document.body.style.overflow = ' hidden visible';
            document.body.style.position = 'static';
        }
    }

    function onInputClose() {
        setShowSearch(false);
    }
    const intl = useIntl();
    return (
        <Container>
            {showSearch ? null : <SocialMediaIcons darkFooter anim={firstLoad} />}
            {showSearch ? (
                <Search onInputClose={onInputClose} isDesktop projectsList={projectsList} />
            ) : (
                <MiddleNav anim={firstLoad}>
                    <SearchBtn onClick={() => setShowSearch(true)}>
                        {intl.formatMessage({
                            id: `general.search`,
                        })}
                        <FaSearch />
                    </SearchBtn>
                    <StyledLink to="/">
                        {intl.formatMessage({
                            id: `general.shop`,
                        })}
                        <FaShoppingCart />
                    </StyledLink>
                    <StyledLink to="/support/">
                        {intl.formatMessage({
                            id: `general.support`,
                        })}
                        <FaHeart />
                    </StyledLink>
                    <StyledLink to="/download/">
                        {intl.formatMessage({
                            id: `general.download`,
                        })}
                        <FaDownload />
                    </StyledLink>
                    <IntlContextConsumer>
                        {({ languages, language: currentLocale }) => {
                            if (currentLocale === 'pl') {
                                return (
                                    <DropdownLink
                                        onMouseLeave={() => setShowKRSMenu(false)}
                                        onMouseEnter={() => setShowKRSMenu(true)}
                                    >
                                        <DropdownLinkItem krs>
                                            Przekaż
                                            <img src={oneIcon} alt="" srcset="" />
                                        </DropdownLinkItem>
                                        {showKRSMenu && (
                                            <Submenu
                                                krs
                                                data={[
                                                    { text: 'Nasz numer KRS:' },
                                                    { text: '0000123512' },
                                                ]}
                                            />
                                        )}
                                    </DropdownLink>
                                );
                            }
                        }}
                    </IntlContextConsumer>
                </MiddleNav>
            )}
            {showSearch ? null : (
                <RightNav anim={firstLoad}>
                    <StyledLink rightNav to="/contact/">
                        {intl.formatMessage({
                            id: `general.contact`,
                        })}
                    </StyledLink>
                    <StyledLink rightNav to="/about-us/">
                        {intl.formatMessage({
                            id: `general.aboutUs`,
                        })}
                    </StyledLink>
                    <DropdownLink
                        rightNav
                        onMouseLeave={() => setShowProjectMenu(false)}
                        onMouseEnter={() => setShowProjectMenu(true)}
                    >
                        <DropdownLinkItem>
                            {intl.formatMessage({
                                id: `general.otherSites`,
                            })}
                            <FaAngleDown />
                        </DropdownLinkItem>
                        {showProjectMenu && <Submenu data={projectLinks} />}
                    </DropdownLink>

                    <DropdownLink
                        rightNav
                        onMouseLeave={() => setShowLangMenu(false)}
                        onMouseEnter={() => setShowLangMenu(true)}
                    >
                        <DropdownLinkItem>
                            <IntlContextConsumer>
                                {({ languages, language: currentLocale }) =>
                                    currentLocale.toUpperCase()
                                }
                            </IntlContextConsumer>
                            <FaAngleDown />
                        </DropdownLinkItem>
                        {showLangMenu && <LanguageSubmenu />}
                    </DropdownLink>
                </RightNav>
            )}
        </Container>
    );
};

export default NavPrimary;

import React, { useState } from "react"
import {
    IntlContextConsumer,
    Link,
    changeLocale,
    useIntl,
} from "gatsby-plugin-intl"
import styled, { keyframes } from "styled-components"
import { FaAngleDown } from "react-icons/fa"
import { MdPrint, MdEmail, MdFileDownload } from "react-icons/md"
import MobileList from "./MobileList"
import MobileNavBtn from "./MobileNavBtn"
import Search from "../Nav/Search"
import { subpageLinks } from "../common/subpageLinks"
import { projectLinks } from "../common/projectLinks"

import logo from "../../images/logo-biale.png"

const documentGlobal = typeof document !== "undefined"

const appear = keyframes`
 0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
const MobileTitle = styled.h3`
    padding: 1.7rem 1.4rem;
    margin-left: 2rem;
`
const MobileNavMenu = styled.div`
    position: sticky;
    top: 0;
    z-index: 999999999999999;
    align-items: center;
    justify-content: space-between;
    background: black;
    width: 100%;
    display: none;
    padding: 0 1rem;
    height: 5rem;

    @media screen and (max-width: 900px) {
        display: flex;
    }

    @media only screen and (orientation: landscape) {
        img {
            height: 4.5rem;
        }
    }
`
const DropDownButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${props => (props.open ? "none" : "1px solid #393939")};

    svg {
        font-size: 1.5rem;
    }
`
const DropDownLink = styled.div`
    display: block;
    width: 100%;
    color: rgba(255, 255, 255, 0.85);
    padding: 1.7rem 1rem 1.7rem 1rem;
    text-decoration: none;
`
const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    svg {
        margin: 1rem 3rem;
        font-size: 2.7rem;
    }
`

const MobileNavItem = styled.li`
    position: relative;

    margin-left: ${props => (props.dropdown ? "0rem" : "2rem")};
    list-style-type: none;

    width: ${props => (props.dropdown ? "100%" : "90%")};

    opacity: 0;
    animation: 0.5s ${appear} forwards;
    animation-delay: 0.2s;

    @media only screen and (orientation: landscape) {
        font-size: 1.4rem;
        padding: 1rem;
    }
`
const StyledLink = styled(props => <Link {...props} />)`
    display: block;
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    padding: ${props =>
        props.dropdown ? "1.7rem 1rem 1.7rem 3rem" : "1.7rem 1rem"};
    border-bottom: ${props => (props.open ? "none" : "1px solid #393939")};
`
const Title = styled.h3`
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 1rem;
    margin-top: 5rem;
    font-size: 1.7rem;
    text-align: center;
`

const activeStyles = {
    borderBottomColor: "#2a80f8",
}
const MobileNav = () => {
    const [homeMenu, setHomeMenu] = useState(false)
    const [projectsMenu, setProjectsMenu] = useState(false)
    const [otherWebsitesMenu, setOtherWebsitesMenu] = useState(false)
    const [langMenu, setLangMenu] = useState(false)

    if (documentGlobal) {
        if (homeMenu || projectsMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = " hidden visible"
        }
    }
    const intl = useIntl()
    return (
        <>
            <MobileNavMenu>
                <MobileNavBtn
                    open={homeMenu}
                    homeBtn
                    onClick={() => {
                        setProjectsMenu(false)
                        setHomeMenu(!homeMenu)
                    }}
                />

                <img
                    style={{ height: "3.2rem" }}
                    src={logo}
                    alt="Smart Oak Project"
                />

                <MobileNavBtn
                    open={projectsMenu}
                    onClick={() => {
                        setHomeMenu(false)
                        setProjectsMenu(!projectsMenu)
                    }}
                />
            </MobileNavMenu>
            <MobileList open={homeMenu}>
                {/* <Search /> */}
                <MobileNavItem>
                    <StyledLink onClick={() => setHomeMenu(false)} to="/">
                        {intl.formatMessage({
                            id: `general.shop`,
                        })}
                    </StyledLink>
                </MobileNavItem>
                <MobileNavItem>
                    <StyledLink
                        onClick={() => setHomeMenu(false)}
                        to="/support/"
                    >
                        {intl.formatMessage({
                            id: `general.support`,
                        })}
                    </StyledLink>
                </MobileNavItem>
                <MobileNavItem>
                    <StyledLink
                        onClick={() => setHomeMenu(false)}
                        to="/download/"
                    >
                        {intl.formatMessage({
                            id: `general.download`,
                        })}
                    </StyledLink>
                </MobileNavItem>

                <MobileNavItem>
                    <StyledLink
                        onClick={() => setHomeMenu(false)}
                        to="/contact/"
                    >
                        {intl.formatMessage({
                            id: `general.contact`,
                        })}
                    </StyledLink>
                </MobileNavItem>
                <MobileNavItem>
                    <StyledLink
                        onClick={() => setHomeMenu(false)}
                        to="/about-us/"
                    >
                        {intl.formatMessage({
                            id: `general.aboutUs`,
                        })}
                    </StyledLink>
                </MobileNavItem>
                <MobileNavItem
                    open={otherWebsitesMenu}
                    onClick={() => {
                        setLangMenu(false)
                        setOtherWebsitesMenu(!otherWebsitesMenu)
                    }}
                >
                    <DropDownButton open={otherWebsitesMenu}>
                        <DropDownLink>
                            {intl.formatMessage({
                                id: `general.otherSites`,
                            })}
                        </DropDownLink>
                        <FaAngleDown
                            style={{
                                transform: otherWebsitesMenu
                                    ? "rotate(180deg)"
                                    : "rotate(0)",
                            }}
                        />
                    </DropDownButton>

                    <MobileList open={otherWebsitesMenu} dropdown>
                        {projectLinks.map((e, i) => (
                            <MobileNavItem key={i} dropdown>
                                <StyledLink
                                    dropdown
                                    onClick={() => setHomeMenu(false)}
                                    to={e.path}
                                >
                                    {e.text}
                                </StyledLink>
                            </MobileNavItem>
                        ))}
                    </MobileList>
                </MobileNavItem>
                <MobileNavItem
                    open={langMenu}
                    onClick={() => {
                        setOtherWebsitesMenu(false)
                        setLangMenu(!langMenu)
                    }}
                >
                    <DropDownButton open={langMenu}>
                        <IntlContextConsumer>
                            {({ languages, language: currentLocale }) => {
                                return (
                                    <DropDownLink>
                                        {currentLocale.toUpperCase()}
                                    </DropDownLink>
                                )
                            }}
                        </IntlContextConsumer>
                        <FaAngleDown
                            style={{
                                transform: langMenu
                                    ? "rotate(180deg)"
                                    : "rotate(0)",
                            }}
                        />
                    </DropDownButton>

                    <MobileList open={langMenu} dropdown>
                        <IntlContextConsumer>
                            {({ languages, language: currentLocale }) =>
                                languages
                                    .filter(e => e !== currentLocale)
                                    .map(language => (
                                        <MobileNavItem
                                            dropdown
                                            onClick={() => {
                                                setHomeMenu(false)
                                                changeLocale(language)
                                            }}
                                        >
                                            <StyledLink dropdown>
                                                {language.toUpperCase()}
                                            </StyledLink>
                                        </MobileNavItem>
                                    ))
                            }
                        </IntlContextConsumer>
                    </MobileList>
                    <IntlContextConsumer>
                        {({ languages, language: currentLocale }) => {
                            if (currentLocale === "pl") {
                                return (
                                    <MobileNavItem open>
                                        <Title>
                                            Nasz numer KRS: 00001241122
                                        </Title>

                                        <IconsContainer>
                                            <MdEmail />
                                            <MdFileDownload />
                                            <MdPrint />
                                        </IconsContainer>
                                    </MobileNavItem>
                                )
                            }
                        }}
                    </IntlContextConsumer>
                </MobileNavItem>
            </MobileList>
            <MobileList open={projectsMenu}>
                <MobileTitle>
                    {intl.formatMessage({
                        id: `general.ourProjects`,
                    })}
                </MobileTitle>
                {subpageLinks.map((e, i) => (
                    <MobileNavItem key={i}>
                        <StyledLink
                            onClick={() => setProjectsMenu(false)}
                            activeStyle={activeStyles}
                            to={e.path}
                        >
                            {e.text}
                        </StyledLink>
                    </MobileNavItem>
                ))}
            </MobileList>
        </>
    )
}

export default MobileNav

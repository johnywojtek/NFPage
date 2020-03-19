import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import SocialMediaIcons from '../common/SocialMediaIcons';
import TopLeftMenu from './TopLeftMenu';
import DownloadFromMarketplaceWrapper from './DownloadFromMarketplaceWrapper';

const Container = styled.div`
    background-color: ${({ theme }) => theme.white};
    width: 100vw;
    max-width: 100%;
    margin-top: 200vh;
    top: 95vh;
    color: ${({ theme }) => theme.white};
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    flex-flow: column wrap;
    @media screen and (max-width: 900px) {
        width: 100vw;
    }
`;

const FooterLink = styled.a`
    text-decoration: none;
    color: #0c6bf0;
    font-size: 1.1rem;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const Row = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: ${({ alignCenter }) => (alignCenter ? 'center' : 'flex-start')};
    justify-content: ${({ justifyEnd }) => (justifyEnd ? 'flex-end' : 'flex-start')};
    width: 100%;
    padding: ${({ p0 }) => (p0 ? `0` : `1.5rem`)};
    &.pb3 {
        padding-bottom: 3rem;
    }
    @media screen and (max-width: 900px) {
        justify-content: ${({ justifyEnd }) => (justifyEnd ? 'center' : 'flex-start')};
        &.pb3 {
            padding-bottom: 1.5rem;
        }
    }
    @media screen and (max-width: 479px) {
        &.footerBottom {
            padding-top: 0;
        }
    }
`;

const Col = styled.div`
    flex: 1 1 50%;
    width: 50%;
    &.marketPlaceCol {
        flex: 1 1 50%;
        width: 50%;
    }
    &.imageCol {
        flex: 1 1 25%;
        width: 25%;
    }
    svg {
        &.svgMarketPlace {
            color: ${({ theme }) => theme.gray3};
            font-size: 3.75rem;
            margin: 0 auto;
            display: block;
            &.white {
                color: ${({ theme }) => theme.white};
            }
        }
    }
    @media screen and (max-width: 900px) {
        flex: 1 1 100%;
        width: 100%;
        &.footerBottomCol {
            flex: 1 1 50%;
            width: 50%;
        }
    }
    @media screen and (max-width: 479px) {
        &.imageCol {
            flex: 1 1 18%;
            width: 18%;
        }
        &.footerBottomCol {
            flex: 1 1 100%;
            width: 100%;
        }
        svg {
            &.svgMarketPlace {
                font-size: 3rem;
            }
        }
    }
`;

const ListItemWrapper = styled.ul`
    margin: 0;
    padding: 0;
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
        &.mainFooterMenu {
            padding: 0;
            li {
                width: 25%;
                text-align: center;
                margin-bottom: 1.5rem;
            }
        }
        @media screen and (max-width: 440px) {
            &.mainFooterMenu {
                li {
                    width: 33.33%;
                }
            }
        }
    }
`;

const FooterSmallText = styled.p`
    font-size: 1.04rem;
    color: ${({ darkFooter, theme }) => (darkFooter ? theme.white : theme.black)};
    text-align: ${({ textAlignLeft }) => (textAlignLeft ? 'left' : 'right')};

    margin-bottom: 0.3rem;
    &:last-of-type {
        margin-bottom: 0;
    }
    @media screen and (max-width: 479px) {
        text-align: ${({ textAlignLeft }) => (textAlignLeft ? 'left' : 'left')};
        text-align: center;
    }
`;

const Footer = ({ darkFooter }) => {
    return (
        <Container darkFooter={darkFooter}>
            <Row alignCenter className="pb3">
                <Col>
                    <ListItemWrapper className="mainFooterMenu">
                        <TopLeftMenu darkFooter={darkFooter} />
                    </ListItemWrapper>
                </Col>
                <Col>
                    <Row p0 justifyEnd>
                        <DownloadFromMarketplaceWrapper darkFooter={darkFooter} />
                    </Row>
                </Col>
            </Row>
            <Row className="footerBottom" alignCenter>
                <Col className="footerBottomCol">
                    <ListItemWrapper className="socialmedia">
                        <SocialMediaIcons footer darkFooter={darkFooter} />
                    </ListItemWrapper>
                </Col>
                <Col className="footerBottomCol">
                    <FooterSmallText darkFooter={darkFooter}>
                        &#9400; 2019 Smart Oak Project.
                        <FormattedMessage id="general.rights" />
                    </FooterSmallText>

                    <FooterSmallText darkFooter={darkFooter}>
                        <FormattedMessage id="general.websiteMadeBy" />{' '}
                        <FooterLink href="/">Progressio</FooterLink>
                    </FooterSmallText>

                    <FooterSmallText darkFooter={darkFooter}>
                        <FormattedMessage id="general.privacyPolicy" />
                    </FooterSmallText>
                </Col>
            </Row>
        </Container>
    );
};

Footer.propTypes = {
    darkFooter: PropTypes.bool,
};

export default Footer;

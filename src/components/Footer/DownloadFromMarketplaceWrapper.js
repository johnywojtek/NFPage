import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FaApple, FaGoogle } from 'react-icons/fa';
import PropTypes from 'prop-types';

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
const DownloadFromMarketplace = styled.div`
    margin: 0 1rem;
    padding: 0.75rem;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ darkFooter }) => (darkFooter ? '#000' : '#fff')};
    display: flex;
    flex-flow: row wrap;
    border: ${({ darkFooter, theme }) => (darkFooter ? null : `1px solid ${theme.gray3}`)};
    width: 175px;
    border-radius: 3px;
    transition: all 0.3s;
    &:last-of-type {
        margin-right: 0;
    }
    &:hover {
        transform: scale(1.04);
    }
    @media screen and (max-width: 900px) {
        &:first-of-type {
            margin-left: 0;
        }
    }
    @media screen and (max-width: 479px) {
        width: 125px;
        margin: 0.5rem;
        &:first-of-type {
            margin-left: 0;
        }
    }
`;

const DownloadFromMarketplaceText = styled.p`
    font-size: ${({ small }) => (small ? '1.2rem' : '1.6rem')};
    color: ${({ darkFooter, theme }) => (darkFooter ? theme.white : theme.gray3)};
    font-weight: 500;
    text-align: center;
    &:first-of-type {
        margin-bottom: 0.5rem;
    }
    @media screen and (max-width: 479px) {
        font-size: ${({ small }) => (small ? '0.95rem' : '1.15rem')};
    }
`;

const DownloadFromMarketplaceWrapper = ({ darkFooter }) => {
    const downloadFromMarketplaceContent = [
        {
            icon: FaApple,
            downloadText: 'Pobierz',
            marketName: 'App Store',
        },
        {
            icon: FaGoogle,
            downloadText: 'Pobierz',
            marketName: 'Google Play',
        },
    ];

    return downloadFromMarketplaceContent.map((singleDownload, index) => {
        return (
            <DownloadFromMarketplace darkFooter={darkFooter} key={index}>
                <Col className="imageCol">
                    <singleDownload.icon
                        className={`svgMarketPlace ${darkFooter ? 'white' : null}`}
                    />
                </Col>
                <Col className="marketPlaceCol">
                    <DownloadFromMarketplaceText darkFooter={darkFooter} small>
                        <FormattedMessage id="general.download" />
                    </DownloadFromMarketplaceText>
                    <DownloadFromMarketplaceText darkFooter={darkFooter}>
                        {singleDownload.marketName}
                    </DownloadFromMarketplaceText>
                </Col>
            </DownloadFromMarketplace>
        );
    });
};

DownloadFromMarketplaceWrapper.propTypes = {
    darkFooter: PropTypes.bool,
};

export default DownloadFromMarketplaceWrapper;

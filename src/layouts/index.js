import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/GlobalStyles/GlobalStyles';
import Nav from '../components/Nav';
import MobileNav from '../components/MobileNav';
import FloatBtn from '../components/FloatBtn';
import Cookie from '../components/Cookie';

const theme = {
    white: '#fff',
    black: '#151515',
    blue1: '#001A7A',
    blue2: '#0B1C5D',
    gray1: '#EFF2F2',
    gray2: '#DFE4E4',
    gray3: '#717478',
    gray4: '#3D565B',
};
const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <FloatBtn />
                <Nav />
                <MobileNav />
                {children}
                <Cookie />
            </ThemeProvider>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default injectIntl(Layout);

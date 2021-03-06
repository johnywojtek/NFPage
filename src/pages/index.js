import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';
import Footer from '../components/Footer';
import { pageData } from '../components/common/pageData';
import Video from '../components/Video';
import VideoLion from '../components/VideoLion';
import Idea from '../components/Idea';
import SocialMedia from '../components/SocialMedia';
import News from '../components/News';
import NewsLetter from '../components/NewsLetter';
import SupportFoundation from '../components/SupportFoundation';
import Map from '../components/Map';

const IndexPage = () => {
    // const data = useStaticQuery(graphql`
    //     query Home {
    //         allInternalPl {
    //             edges {
    //                 node {
    //                     home {
    //                         header {
    //                             alternative_id
    //                             title
    //                             desc
    //                             btns {
    //                                 btnType
    //                                 btnText
    //                                 btnLink
    //                             }
    //                         }
    //                         content {
    //                             alternative_id
    //                             type
    //                             title
    //                             desc
    //                             btns {
    //                                 btnType
    //                                 btnText
    //                                 btnLink
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `);
    const intl = useIntl();

    return (
        <>
            <Video />
            <Idea />
            <SocialMedia />
            <News />
            <NewsLetter />
            <VideoLion />
            <SupportFoundation />
            <Map />
            <Footer />
        </>
    );
};
export default IndexPage;

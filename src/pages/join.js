import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';
import Footer from '../components/Footer';
import { pageData } from '../components/common/pageData';
import Video from '../components/Video';
import VideoLion from '../components/VideoLion';
import BuyInShop from '../components/BuyInShop';
import SocialMedia from '../components/SocialMedia';
import News from '../components/News';
import NewsLetter from '../components/NewsLetter';
import SupportFoundation from '../components/SupportFoundation';
import Map from '../components/Map';
import Donors from '../components/Donors';
import Heading from '../components/common/Heading';

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
            <Heading
                title="Dołącz"
                desc="Lorem ipsum dolor sit amet, consectetur eplos eklosi adipisifwcing elit, sed doio eiusmod tempor incididunt ut labore et dolore roipi magna aliqua. Ut enim adeop minim veeniam, quis nostruklad exercitation ullamico laboris nisi ut. "
            />
            <BuyInShop />
            <Donors />

            <Footer />
        </>
    );
};
export default IndexPage;

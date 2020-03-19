module.exports = {
    pathPrefix: '/Landing-Page',
    siteMetadata: {
        title: `Landing SmartOakProject`,
        description: `Landing SmartOakProject`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-layout`,

        // {
        //     resolve: "gatsby-source-apiserver",
        //     options: {
        //         typePrefix: "internal__",
        //         name: `data`,
        //         entitiesArray: [
        //             {
        //                 url: `http://demo1423921.mockable.io/pl`,
        //                 method: "get",
        //                 headers: {
        //                     "Content-Type": "application/json",
        //                 },
        //                 name: `pl`,
        //                 localSave: true,
        //                 path: `${__dirname}/src/intl/`,
        //             },
        //             {
        //                 url: `http://demo1423921.mockable.io/en`,
        //                 method: "get",
        //                 headers: {
        //                     "Content-Type": "application/json",
        //                 },
        //                 name: `en`,
        //                 localSave: true,
        //                 path: `${__dirname}/src/intl/`,
        //             },
        //             {
        //                 url: `http://demo1423921.mockable.io/de`,
        //                 method: "get",
        //                 headers: {
        //                     "Content-Type": "application/json",
        //                 },
        //                 name: `de`,
        //                 localSave: true,
        //                 path: `${__dirname}/src/intl/`,
        //             },
        //         ],
        //     },
        // },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Smart Oak Project`,
                short_name: `Smart Oak`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#fff`,
                display: `minimal-ui`,
                icon: 'src/images/title-icon.png',
            },
        },
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                path: `${__dirname}/src/intl`,
                languages: [`pl`, `en`, `de`],
                defaultLanguage: `pl`,
                redirect: true,
                // redirectComponent: require.resolve(
                //     `./src/components/Redirect/redirect.js`
                // ),
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Muli`,
                    `source sans pro\:200,300,400,400i,700`, // you can also specify font weights and styles
                ],
                display: 'swap',
            },
        },

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};

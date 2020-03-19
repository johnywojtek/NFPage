import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import NavPrimary from './NavPrimary';
import NavSecondary from './NavSecondary';
import Json from '../../intl/pl.json';

const Nav = () => {
    const intl = useIntl();

    // const getProjectList = projectsArray => {
    //     let projectsList = [];

    //     projectsArray.map((element, index) => {
    //         element.array.map((singleProject, i) => {
    //             if (singleProject.type === 'item') {
    //                 projectsList.push({
    //                     text: intl.formatMessage({
    //                         id: `${element.nameOfProject}.content.${i}.title`,
    //                     }),
    //                     path: `/${element.path}/#${singleProject.id}`,
    //                 });
    //             }
    //         });
    //     });
    //     return projectsList;
    // };
    const projectsList = [];
    // const projectsList = getProjectList([
    //     {
    //         array: Json.neuronFoundation.content,
    //         path: 'neuron-foundation',
    //         nameOfProject: 'neuronFoundation',
    //     },
    //     {
    //         array: Json.newNeuropsychiatry.content,
    //         path: 'new-neuropsychiatry',
    //         nameOfProject: 'newNeuropsychiatry',
    //     },
    //     {
    //         array: Json.iMundus.content,
    //         path: 'i-mundus',
    //         nameOfProject: 'iMundus',
    //     },
    //     {
    //         array: Json.oakesInnovate.content,
    //         path: 'oakes-innovate',
    //         nameOfProject: 'oakesInnovate',
    //     },
    //     {
    //         array: Json.nMedia.content,
    //         path: 'n-media',
    //         nameOfProject: 'nMedia',
    //     },
    //     {
    //         array: Json.oakesClinic.content,
    //         path: 'oakes-clinic',
    //         nameOfProject: 'oakesClinic',
    //     },
    //     {
    //         array: Json.oakAtlantis.content,
    //         path: 'oak-atlantis',
    //         nameOfProject: 'oakAtlantis',
    //     },
    //     {
    //         array: Json.neuronCurrency.content,
    //         path: 'neuron-currency',
    //         nameOfProject: 'neuronCurrency',
    //     },
    //     {
    //         array: Json.support.content,
    //         path: 'support',
    //         nameOfProject: 'support',
    //     },
    //     {
    //         array: Json.download.content,
    //         path: 'download',
    //         nameOfProject: 'download',
    //     },
    // ]);

    return (
        <>
            <NavPrimary projectsList={projectsList} />
            <NavSecondary />
        </>
    );
};
export default Nav;

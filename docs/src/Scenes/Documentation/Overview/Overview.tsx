import * as React from 'react';

import NavDocs from './../../../Components/NavDocs';
import NavRoutes from './../../../Components/NavRoutes';

import Start from './Scenes/Start';
import Helpers from './Scenes/Helpers';

const pages = [
    {
        title: 'Start',
        to: '/start',
        component: Start,
    },
    {
        title: 'Helpers',
        to: '/helpers',
        component: Helpers,
    },
];

export const Overview = props => <NavRoutes {...props} pages={pages} />

export const OverviewMenu = (props) => <NavDocs {...props} pages={pages} />
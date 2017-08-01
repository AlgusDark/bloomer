import * as React from 'react';

import NavDocs from './../../../Components/NavDocs';
import NavRoutes from './../../../Components/NavRoutes';

import Helpers from './Scenes/Helpers';
import Start from './Scenes/Start';

const pages = [
    {
        component: Start,
        title: 'Start',
        to: '/start',
    },
    {
        component: Helpers,
        title: 'Helpers',
        to: '/helpers',
    },
];

export const Overview = (props) => <NavRoutes {...props} pages={pages} />;

export const OverviewMenu = (props) => <NavDocs {...props} pages={pages} />;

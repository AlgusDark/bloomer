import * as React from 'react';

import NavDocs from './../../../Components/NavDocs';
import NavRoutes from './../../../Components/NavRoutes';

import Columns from './Scenes/Columns';
import Tiles from './Scenes/Tiles';

const pages = [
        {
            title: 'Columns',
            to: '/columns',
            component: Columns,
        },
        {
            title: 'Tiles',
            to: '/tiles',
            component: Tiles,
        },
    ];

export const Grid = props => <NavRoutes {...props} pages={pages} /> ;

export const GridMenu = props => <NavDocs {...props} pages={pages} /> ;
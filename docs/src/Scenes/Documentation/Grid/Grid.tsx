import * as React from 'react';

import NavDocs from './../../../Components/NavDocs';
import NavRoutes from './../../../Components/NavRoutes';

import Columns from './Scenes/Columns';
import Tiles from './Scenes/Tiles';

const pages = [
        {
            component: Columns,
            title: 'Columns',
            to: '/columns',
        },
        {
            component: Tiles,
            title: 'Tiles',
            to: '/tiles',
        },
    ];

export const Grid = (props) => <NavRoutes {...props} pages={pages} /> ;

export const GridMenu = (props) => <NavDocs {...props} pages={pages} /> ;

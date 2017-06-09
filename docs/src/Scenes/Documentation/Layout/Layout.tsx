import * as React from 'react';

import NavDocs from './../../../Components/NavDocs';
import NavRoutes from './../../../Components/NavRoutes';

import Container from './Scenes/Container';
import Hero from './Scenes/Hero';
import Section from './Scenes/Section';
import Footer from './Scenes/Footer';

const pages = [
    {
        title: 'Container',
        to: '/container',
        component: Container,
    },
    {
        title: 'Hero',
        to: '/hero',
        component: Hero,
    },
    {
        title: 'Section',
        to: '/section',
        component: Section,
    },
    {
        title: 'Footer',
        to: '/footer',
        component: Footer,
    },
];

export const Layout = props => <NavRoutes {...props} pages={pages} />

export const LayoutMenu = (props) => <NavDocs {...props} pages={pages} />
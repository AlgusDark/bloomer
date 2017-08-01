import * as React from 'react';

import NavDocs from './../../../Components/NavDocs';
import NavRoutes from './../../../Components/NavRoutes';

import Container from './Scenes/Container';
import Footer from './Scenes/Footer';
import Hero from './Scenes/Hero';
import Section from './Scenes/Section';

const pages = [
    {
        component: Container,
        title: 'Container',
        to: '/container',
    },
    {
        component: Hero,
        title: 'Hero',
        to: '/hero',
    },
    {
        component: Section,
        title: 'Section',
        to: '/section',
    },
    {
        component: Footer,
        title: 'Footer',
        to: '/footer',
    },
];

export const Layout = (props) => <NavRoutes {...props} pages={pages} />;

export const LayoutMenu = (props) => <NavDocs {...props} pages={pages} />;

import * as React from 'react';

import NavDocs from './../../../Components/NavDocs';
import NavRoutes from './../../../Components/NavRoutes';

import Breadcrumb from './Scenes/Breadcrumb';
import Card from './Scenes/Card';
import Level from './Scenes/Level';
import Media from './Scenes/Media';
import Menu from './Scenes/Menu';
import Message from './Scenes/Message';
import Modal from './Scenes/Modal';
import Nav from './Scenes/Nav';
import Navbar from './Scenes/Navbar';
import Pagination from './Scenes/Pagination';
import Panel from './Scenes/Panel';
import Tabs from './Scenes/Tabs';

const pages = [
    {
        title: 'Breadcrumb',
        to: '/breadcrumb',
        component: Breadcrumb,
    },
    {
        title: 'Card',
        to: '/card',
        component: Card,
    },
    {
        title: 'Level',
        to: '/level',
        component: Level,
    },
    {
        title: 'Media',
        to: '/media',
        component: Media,
    },
    {
        title: 'Menu',
        to: '/menu',
        component: Menu,
    },
    {
        title: 'Message',
        to: '/message',
        component: Message,
    },
    {
        title: 'Modal',
        to: '/modal',
        component: Modal,
    },
    {
        title: 'Nav',
        to: '/nav',
        component: Nav,
        deprecated: true,
    },
    {
        title: 'Navbar',
        to: '/navbar',
        component: Navbar,
    },
    {
        title: 'Pagination',
        to: '/pagination',
        component: Pagination,
    },
    {
        title: 'Panel',
        to: '/panel',
        component: Panel,
    },
    {
        title: 'Tabs',
        to: '/tabs',
        component: Tabs,
    },
];

export const Components = props => <NavRoutes {...props} pages={pages} />

export const ComponentsMenu = (props) => <NavDocs {...props} pages={pages} />
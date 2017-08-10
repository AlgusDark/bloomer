import * as React from 'react';

import NavDocs from './../../../Components/NavDocs';
import NavRoutes from './../../../Components/NavRoutes';

import Breadcrumb from './Scenes/Breadcrumb';
import Card from './Scenes/Card';
import Dropdown from './Scenes/Dropdown';
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
        component: Breadcrumb,
        title: 'Breadcrumb',
        to: '/breadcrumb',
    },
    {
        component: Card,
        title: 'Card',
        to: '/card',
    },
    {
        component: Dropdown,
        title: 'Dropdown',
        to: '/dropdown',
    },
    {
        component: Level,
        title: 'Level',
        to: '/level',
    },
    {
        component: Media,
        title: 'Media',
        to: '/media',
    },
    {
        component: Menu,
        title: 'Menu',
        to: '/menu',
    },
    {
        component: Message,
        title: 'Message',
        to: '/message',
    },
    {
        component: Modal,
        title: 'Modal',
        to: '/modal',
    },
    {
        component: Nav,
        deprecated: true,
        title: 'Nav',
        to: '/nav',
    },
    {
        component: Navbar,
        title: 'Navbar',
        to: '/navbar',
    },
    {
        component: Pagination,
        title: 'Pagination',
        to: '/pagination',
    },
    {
        component: Panel,
        title: 'Panel',
        to: '/panel',
    },
    {
        component: Tabs,
        title: 'Tabs',
        to: '/tabs',
    },
];

export const Components = (props) => <NavRoutes {...props} pages={pages} />;

export const ComponentsMenu = (props) => <NavDocs {...props} pages={pages} />;

import * as React from 'react';

import NavDocs from './../../../Components/NavDocs';
import NavRoutes from './../../../Components/NavRoutes';

import { isActive } from './../../../utils';

import Box from './Scenes/Box';
import Button from './Scenes/Button';
import Content from './Scenes/Content';
import Delete from './Scenes/Delete';
import Form from './Scenes/Form';
import Icon from './Scenes/Icon';
import Image from './Scenes/Image';
import Notification from './Scenes/Notification';
import Progress from './Scenes/Progress';
import Table from './Scenes/Table';
import Tag from './Scenes/Tag';
import Title from './Scenes/Title';

const pages = [
    {
        component: Box,
        title: 'Box',
        to: '/box',
    },
    {
        component: Button,
        title: 'Button',
        to: '/button',
    },
    {
        component: Content,
        title: 'Content',
        to: '/content',
    },
    {
        component: Delete,
        title: 'Delete',
        to: '/delete',
    },
    {
        component: Form,
        title: 'Form',
        to: '/form',
    },
    {
        component: Icon,
        title: 'Icon',
        to: '/icon',
    },
    {
        component: Image,
        title: 'Image',
        to: '/image',
    },
    {
        component: Notification,
        title: 'Notification',
        to: '/notification',
    },
    {
        component: Progress,
        title: 'Progress',
        to: '/Progress',
    },
    {
        component: Table,
        title: 'Table',
        to: '/table',
    },
    {
        component: Tag,
        title: 'Tag',
        to: '/tag',
    },
    {
        component: Title,
        title: 'Title',
        to: '/title',
    },
];

export const Elements = (props) => <NavRoutes {...props} pages={pages} />;

export const ElementsMenu = (props) => <NavDocs {...props} pages={pages} />;

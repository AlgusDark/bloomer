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
        title: 'Box',
        to: '/box',
        component: Box,
    },
    {
        title: 'Button',
        to: '/button',
        component: Button,
    },
    {
        title: 'Content',
        to: '/content',
        component: Content,
    },
    {
        title: 'Delete',
        to: '/delete',
        component: Delete,
    },
    {
        title: 'Form',
        to: '/form',
        component: Form,
    },
    {
        title: 'Icon',
        to: '/icon',
        component: Icon,
    },
    {
        title: 'Image',
        to: '/image',
        component: Image,
    },
    {
        title: 'Notification',
        to: '/notification',
        component: Notification,
    },
    {
        title: 'Progress',
        to: '/Progress',
        component: Progress,
    },
    {
        title: 'Table',
        to: '/table',
        component: Table,
    },
    {
        title: 'Tag',
        to: '/tag',
        component: Tag,
    },
    {
        title: 'Title',
        to: '/title',
        component: Title,
    },
];

export const Elements = props => <NavRoutes {...props} pages={pages} />

export const ElementsMenu = props => <NavDocs {...props} pages={pages} />
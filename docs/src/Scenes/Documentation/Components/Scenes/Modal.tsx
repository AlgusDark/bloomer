import * as React from 'react';
import * as Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { noModifiers, render, isSize } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle, Checkbox, Radio, Help } from './../../../../../../src';

const ModalRows: Docs.Row[] = [
    {
        prop: 'isActive',
        type: 'bool',
    },
];

const ModalCloseRows: Docs.Row[] = [
    isSize,
    render('ModalClose'),
];

const ModalDocs = (props) => (
    <Container>
        <Title>Modal</Title>
        <TableDocs rows={ModalRows} />

        <hr />

        <Title>ModalBackground</Title>
        <p>{noModifiers}</p>

        <hr />

        <Title>ModalContent</Title>
        <p>{noModifiers}</p>

        <hr />

        <Title>ModalClose</Title>
        <TableDocs rows={ModalCloseRows} />

        <hr />

        <Title>ModalCard</Title>
        <p>{noModifiers}</p>

        <hr />

        <Title>ModalCardHeader</Title>
        <p>{noModifiers}</p>

        <hr />

        <Title>ModalCardTitle</Title>
        <p>{noModifiers}</p>

        <hr />

        <Title>ModalCardBody</Title>
        <p>{noModifiers}</p>

        <hr />

        <Title>ModalCardFooter</Title>
        <p>{noModifiers}</p>
    </Container>
)

export default ModalDocs;
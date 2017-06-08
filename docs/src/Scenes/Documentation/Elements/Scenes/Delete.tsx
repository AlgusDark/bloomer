import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { isSize, render } from './../../Overview/Scenes/Helpers';
import { Container, Title } from './../../../../../../src';

const DeleteRows: Docs.Row[] = [
    isSize,
    render('Delete'),
]

const DeleteDocs = (props) => (
    <Container>
        <Title>Delete</Title>
        <TableDocs rows={DeleteRows} />
    </Container>
)

export default DeleteDocs;
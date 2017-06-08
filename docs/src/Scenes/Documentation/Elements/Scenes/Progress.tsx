import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { isColor, isSize } from './../../Overview/Scenes/Helpers';
import { Container, Title } from './../../../../../../src';

const ProgressRows: Docs.Row[] = [
    isColor,
    isSize,
]

const ProgressDocs = (props) => (
    <Container>
        <Title>Progress</Title>
        <TableDocs rows={ProgressRows} />
    </Container>
)

export default ProgressDocs;
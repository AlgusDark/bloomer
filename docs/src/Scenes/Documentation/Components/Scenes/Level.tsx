import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { noModifiers, render } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle } from './../../../../../../src';

const LevelRows: Docs.Row[] = [
    {
        prop: 'isMobile',
        type: 'bool',
    }
];

const LevelItemRows: Docs.Row[] = [
    {
        prop: 'isFlexible',
        type: 'bool',
    }
];

const LevelDocs = (props) => (
    <Container>
        <Title>Level</Title>
        <TableDocs rows={LevelRows} />

        <hr />

        <Title>LevelItem</Title>
        <TableDocs rows={LevelItemRows} />

        <hr />

        <Title>LevelLeft</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>LevelRight</Title>
        <Subtitle>{noModifiers}</Subtitle>
    </Container>
)

export default LevelDocs;
import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { isColor, isSize, noModifiers } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle } from './../../../../../../src';

const HeroRows: Docs.Row[] = [
    isColor,
    isSize,
    {
        prop: 'isBold',
        type: 'bool',
    },
    {
        prop: 'isFullHeight',
        type: 'bool',
    },
]

const HeroVideoRows: Docs.Row[] = [
    {
        prop: 'isTransparent',
        type: 'bool',
    },
]

const ContainerDocs = (props) => (
    <Container>
        <Title>Hero</Title>
        <TableDocs rows={HeroRows} />

        <hr />

        <Title>HeroHeader</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr/>

        <Title>HeroVideo</Title>
        <TableDocs rows={HeroVideoRows} />

        <hr />

        <Title>HeroBody</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>HeroFooter</Title>
        <Subtitle>{noModifiers}</Subtitle>
    </Container>
)

export default ContainerDocs;
import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { noModifiers, render } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle } from './../../../../../../src';

const cardHeaderIconRows: Docs.Row[] = [
    render('CardHeaderIcon')
];

const cardFooterItemRows: Docs.Row[] = [
    render('CardFooterItem')
]

const CardDocs = (props) => (
    <Container>
        <Title>Card</Title>
        <Subtitle>{noModifiers}</Subtitle>
        
        <hr/>

        <Title>CardHeader</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr/>

        <Title>CardHeaderTitle</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr/>

        <Title>CardHeaderIcon</Title>
        <TableDocs rows={cardHeaderIconRows} />

        <hr/>

        <Title>CardContent</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr/>

        <Title>CardImage</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr/>

        <Title>CardFooter</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr/>

        <Title>CardFooterItem</Title>
        <TableDocs rows={cardFooterItemRows} />
    </Container>
)

export default CardDocs;
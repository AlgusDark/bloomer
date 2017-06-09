import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { noModifiers, isColor } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle } from './../../../../../../src';

const MessageRows: Docs.Row[] = [
    isColor,
];

const MessageDocs = (props) => (
    <Container>
        <Title>Message</Title>
        <TableDocs rows={MessageRows} />

        <hr/>

        <Title>MessageBody</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>MessageHeader</Title>
        <Subtitle>{noModifiers}</Subtitle>        
    </Container>
)

export default MessageDocs;
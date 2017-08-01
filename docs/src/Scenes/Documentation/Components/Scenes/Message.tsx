import * as React from 'react';
import * as Highlight from 'react-highlight';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import { Column, Columns, Delete } from './../../../../../../src';
import { Container, Subtitle, Title } from './../../../../../../src';
import { Message, MessageBody, MessageHeader } from './../../../../../../src';
import { isColor, noModifiers } from './../../Overview/Scenes/Helpers';

const MessageRows: Docs.Row[] = [
    isColor,
];

const MessageExample = `<Message>
    <MessageHeader>
        <p>Hello World</p>
        <Delete />
    </MessageHeader>
    <MessageBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>,
        tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
        purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis
        lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna
        a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
    </MessageBody>
</Message>
`;

const MessageDocs = (props) => (
    <Container>
        <Title>Message</Title>
        <Columns>
            <Column>
                <Message>
                    <MessageHeader>
                        <p>Hello World</p>
                        <Delete />
                    </MessageHeader>
                    <MessageBody>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>,
                        tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
                        purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis
                        lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna
                        a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                    </MessageBody>
                </Message>
            </Column>
            <Column isSize="1/2"><Highlight>{MessageExample}</Highlight></Column>
        </Columns>

        <hr />

        <Title>Message</Title>
        <TableDocs rows={MessageRows} />

        <hr />

        <Title>MessageBody</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>MessageHeader</Title>
        <Subtitle>{noModifiers}</Subtitle>
    </Container>
);

export default MessageDocs;

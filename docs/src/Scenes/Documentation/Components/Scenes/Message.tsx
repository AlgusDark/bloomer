import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { noModifiers, isColor } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle } from './../../../../../../src';
import { Message, MessageBody, MessageHeader, } from './../../../../../../src';
import { Columns, Column, Delete } from './../../../../../../src';

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
            <Column isHalf><Highlight>{MessageExample}</Highlight></Column>
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
)

export default MessageDocs;
import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { isSize, render } from './../../Overview/Scenes/Helpers';
import { Container, Title, Delete, Columns, Column, Tag, Notification, Message, MessageBody, MessageHeader } from './../../../../../../src';

const DeleteRows: Docs.Row[] = [
    isSize,
    render('Delete'),
];

const DeleteExample = `<Columns isVCentered>
    <Column isSize={2}><Delete /></Column>
    <Column isSize={2}>
        <Tag isColor='success'>
            Tag .is-success <Delete />
        </Tag>
    </Column>
    <Column>
        <Notification isColor='danger'>
            <Delete />
            You can use it on {'<Notification />'}
        </Notification>
    </Column>
    <Column>
        <Message isColor='info'>
            <MessageHeader>Inse a {'<MessageHeader />'} <Delete /></MessageHeader>
            <MessageBody>Hodor hodor - hodor... Hodor hodor hodor... Hodor hodor hodor.</MessageBody>
        </Message>
    </Column>
</Columns>
`;

const DeleteDocs = (props) => (
    <Container>
        <Title>Delete</Title>
        <Columns isVCentered>
            <Column isSize={2}><Delete /></Column>
            <Column isSize={2}>
                <Tag isColor='success'>
                    Tag .is-success <Delete />
                </Tag>
            </Column>
            <Column>
                <Notification isColor='danger'>
                    <Delete />
                    You can use it on {'<Notification />'}
                </Notification>
            </Column>
            <Column>
                <Message isColor='info'>
                    <MessageHeader>Inse a {'<MessageHeader />'} <Delete /></MessageHeader>
                    <MessageBody>Hodor hodor - hodor... Hodor hodor hodor... Hodor hodor hodor.</MessageBody>
                </Message>
            </Column>
        </Columns>
        <Highlight>{DeleteExample}</Highlight>

        <hr />

        <Title>API</Title>
        <TableDocs rows={DeleteRows} />
    </Container>
)

export default DeleteDocs;
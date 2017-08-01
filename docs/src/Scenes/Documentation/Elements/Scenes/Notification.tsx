import * as React from 'react';
import * as Highlight from 'react-highlight';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import { Column, Columns, Container, Delete, Notification, Title } from './../../../../../../src';
import { isColor } from './../../Overview/Scenes/Helpers';

const NotificationRows: Docs.Row[] = [
    isColor,
];

const NotificationExample = `<Notification>
    <Delete />
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor sit amet,
    consectetur adipiscing elit
</Notification>
<Notification isColor='primary'>
    <Delete />
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor sit amet,
    consectetur adipiscing elit
</Notification>
<Notification isColor='info'>
    <Delete />
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor sit amet,
    consectetur adipiscing elit
</Notification>
`;

const NotificationDocs = (props) => (
    <Container>
        <Title>Notification</Title>
        <Columns>
            <Column>
                <Notification>
                    <Delete />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor sit amet,
                    consectetur adipiscing elit
                </Notification>
                <Notification isColor="primary">
                    <Delete />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor sit amet,
                    consectetur adipiscing elit
                </Notification>
                <Notification isColor="info">
                    <Delete />
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor sit amet,
                    consectetur adipiscing elit
                </Notification>
            </Column>
            <Column>
                <Highlight>{NotificationExample}</Highlight>
            </Column>
        </Columns>

        <hr />
        <Title>API</Title>
        <TableDocs rows={NotificationRows} />
    </Container>
);

export default NotificationDocs;

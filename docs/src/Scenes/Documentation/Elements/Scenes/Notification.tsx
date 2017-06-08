import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { isColor } from './../../Overview/Scenes/Helpers';
import { Container, Title } from './../../../../../../src';

const NotificationRows: Docs.Row[] = [
    isColor,
]

const NotificationDocs = (props) => (
    <Container>
        <Title>Notification</Title>
        <TableDocs rows={NotificationRows} />
    </Container>
)

export default NotificationDocs;
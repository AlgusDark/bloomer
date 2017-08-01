import * as React from 'react';
import * as Highlight from 'react-highlight';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import { Column, Columns, Container, Progress, Title  } from './../../../../../../src';
import { isColor, isSize } from './../../Overview/Scenes/Helpers';

const ProgressRows: Docs.Row[] = [
    isColor,
    isSize,
];

const ProgressColorExample = `<Progress value={15} max={100}/>
<Progress isColor='primary' value={30} max={100}/>
<Progress isColor='info' value={45} max={100}/>
<Progress isColor='warning' value={75} max={100}/>
`;

const ProgressSizeExample = `<Progress isSize='small' value={15} max={100} />
<Progress isSize='medium' value={30} max={100} />
<Progress isSize='large' value={45} max={100} />
`;

const ProgressDocs = (props) => (
    <Container>
        <Title>Progress</Title>
        <Columns>
            <Column>
                <Progress value={15} max={100} />
                <Progress isColor="primary" value={30} max={100} />
                <Progress isColor="info" value={45} max={100} />
                <Progress isColor="warning" value={75} max={100} />
            </Column>
            <Column>
                <Highlight>{ProgressColorExample}</Highlight>
            </Column>
        </Columns>

        <hr />

        <Columns>
            <Column>
                <Progress isSize="small" value={15} max={100} />
                <Progress isSize="medium" value={30} max={100} />
                <Progress isSize="large" value={45} max={100} />
            </Column>
            <Column>
                <Highlight>{ProgressSizeExample}</Highlight>
            </Column>
        </Columns>

        <hr />

        <Title>API</Title>
        <TableDocs rows={ProgressRows} />
    </Container>
);

export default ProgressDocs;

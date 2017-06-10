import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { isColor, isSize, render, states, isLoading } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle, Button, Columns, Column } from './../../../../../../src';

const ButtonRows: Docs.Row[] = [
    ...states,
    isColor,
    isLoading,
    isSize,
    {
        prop: 'isLink',
        type: 'bool',
    },
    {
        prop: 'isOutlined',
        type: 'bool',
    },
    {
        prop: 'isInverted',
        type: 'bool',
    },
    {
        prop: 'isStatic',
        type: 'bool',
    },
    render('Button'),
]

const ButtonExample = `<Columns>
    <Button isColor='info' render={
        props => <Column hasTextAlign='centered'><p {...props}>Button</p></Column>
    } />
    <Column>
        <Button isColor='warning' isLoading>isLoading={true}</Button>
    </Column>
    <Column hasTextAlign='centered'>
        <Button isColor='success' isOutlined>isOutlined</Button>
    </Column>
</Columns>
`;

const ButtonDocs = (props) => (
    <Container>
        <Columns>
            <Button isColor='info' render={
                props => <Column hasTextAlign='centered'><p {...props}>Button</p></Column>
            } />
            <Column hasTextAlign='centered'>
                <Button isColor='warning' isLoading>isLoading</Button>
            </Column>
            <Column hasTextAlign='centered'>
                <Button isColor='success' isOutlined>isOutlined</Button>
            </Column>
        </Columns>
        <Highlight className='javascript'>
            {ButtonExample}
        </Highlight>

        <hr />

        <Title>API</Title>
        <TableDocs rows={ButtonRows} />
    </Container>
)

export default ButtonDocs;
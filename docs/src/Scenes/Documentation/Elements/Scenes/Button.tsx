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

const ButtonDocs = (props) => (
    <Container>
        <Title>Button</Title>
        <TableDocs rows={ButtonRows} />
        <Columns>
            <Button isColor='info' render={
                props => <Column hasTextAlign='centered'><p {...props}>Button</p></Column>
            } />
        </Columns>

        <Highlight className='javascript'>
            {`import * as React from 'react';
import { Box, Columns, Column } from 'bloomer';

const MyComponent = (props) => (
    <Columns>
        <Button href='#' isColor='info' render={
            props => <Column hasTextAlign='centered'><p {...props}>Button</p></Column>
        } />
    </Columns>
)
`}
        </Highlight>
    </Container>
)

export default ButtonDocs;
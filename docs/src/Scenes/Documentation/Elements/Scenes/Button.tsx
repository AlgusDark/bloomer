import * as React from 'react';
import * as Highlight from 'react-highlight';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import { Button, Column, Columns, Container, Subtitle, Title } from './../../../../../../src';
import { isColor, isFullWidth, isLoading, isSize, render, states } from './../../Overview/Scenes/Helpers';

const ButtonRows: Docs.Row[] = [
    ...states,
    isColor,
    isLoading,
    isSize,
    isFullWidth,
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
];

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
        <Title>Button</Title>
        <Columns>
            <Button isColor="info" render={
                (props) => <Column hasTextAlign="centered"><p {...props}>Button</p></Column>
            } />
            <Column hasTextAlign="centered">
                <Button isColor="warning" isLoading>isLoading</Button>
            </Column>
            <Column hasTextAlign="centered">
                <Button isColor="success" isOutlined>isOutlined</Button>
            </Column>
        </Columns>
        <Highlight className="javascript">
            {ButtonExample}
        </Highlight>

        <hr />

        <Title>API</Title>
        <Subtitle>
            By default, <strong>{'<Button />'}</strong> renders a <strong>{'<button />'}</strong> element,
            but it will render an <strong>{'<a/>'}</strong> element if you provide <strong>href</strong> prop.
            <strong>E.g.</strong> <em><strong>{'<Button href="#"/>'}</strong></em>.
        </Subtitle>
        <TableDocs rows={ButtonRows} />
    </Container>
);

export default ButtonDocs;

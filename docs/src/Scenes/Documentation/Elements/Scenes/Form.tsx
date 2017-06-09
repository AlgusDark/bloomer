import * as React from 'react';
import * as Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { isSize, isColor, states, isLoading, noModifiers } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle, Checkbox, Radio, Help } from './../../../../../../src';

const LabelRows: Docs.Row[] = [
    isSize,
];

const InputRows: Docs.Row[] = [
    isSize,
    isColor,
    ...states,
];

const TextAreaRows: Docs.Row[] = [
    isSize,
    ...states,
];

const SelectRows: Docs.Row[] = [
    isColor,
    isSize,
    isLoading,
];

const HelpRows: Docs.Row[] = [
    isColor,
];

const ControlRows: Docs.Row[] = [
    isLoading,
    {
        prop: 'hasIcons',
        type: 'bool | string | string[]',
        description: <td><code>left</code> | <code>right</code></td>,
    },
    {
        prop: 'isExpanded',
        type: 'bool',
    },
];

const FieldRows: Docs.Row[] = [
    {
        prop: 'isGrouped',
        type: 'bool | string',
        description: <td><code>right</code> | <code>centered</code></td>,
    },
    {
        prop: 'hasAddons',
        type: 'bool | string',
        description: <td><code>right</code> | <code>centered</code> | <code>fullwidth</code></td>,
    },
    {
        prop: 'isHorizontal',
        type: 'bool',
    },
];

const FieldLabelRows: Docs.Row[] = [
    isSize,
    {
        prop: 'isNormal',
        type: 'bool',
    },
];

const FormDocs = (props) => (
    <Container>
        <Title>Label</Title>
        <TableDocs rows={LabelRows} />

        <hr />

        <Title>Input</Title>
        <TableDocs rows={InputRows} />

        <hr />

        <Title>TextArea</Title>
        <TableDocs rows={TextAreaRows} />

        <hr />

        <Title>Select</Title>
        <TableDocs rows={SelectRows} />

        <hr />

        <Title>Checkbox</Title>
        <Checkbox> {noModifiers} </Checkbox>

        <hr />

        <Title>Radio</Title>
        <Radio name='option'> {noModifiers} </Radio>

        <hr />

        <Title>Help</Title>
        <TableDocs rows={HelpRows} />

        <hr />

        <Title>Control</Title>
        <TableDocs rows={ControlRows} />

        <hr />

        <Title>Field</Title>
        <TableDocs rows={FieldRows} />

        <hr />

        <Subtitle isSize={5}>FieldBody</Subtitle>
        <p>{noModifiers}</p>

        <hr />

        <Subtitle isSize={5}>FieldLabel</Subtitle>
        <TableDocs rows={FieldLabelRows} />
    </Container>
)

export default FormDocs;
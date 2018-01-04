import * as React from 'react';
import * as Highlight from 'react-highlight';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import { Column, Columns, Container, Content, Icon, Title } from './../../../../../../src';
import { isSize } from './../../Overview/Scenes/Helpers';

const IconRows: Docs.Row[] = [
    isSize,
    {
        description: <td> <code>left</code> | <code>right</code> — Should be used only when wrapped by {
          '<Control />'} that <strong>hasIcons</strong> </td>,
        prop: 'isAlign',
        type: 'string',
    },
];

const IconFAExample = `<Icon isSize="small" className="fa fa-home" />
<Icon className="fa fa-home fa-lg" />
<Icon isSize="medium" className="fa fa-home fa-2x" />
<Icon isSize="large" className="fa fa-home fa-3x" />
`;

const IconMDIExample = `<Icon isSize="small" className="mdi mdi-home" />
<Icon className="mdi mdi-home mdi-18px" />
<Icon isSize="medium" className="mdi mdi-home mdi-24px" />
<Icon isSize="large" className="mdi mdi-home mdi-36px" />
<Icon isSize="large" className="mdi mdi-home mdi-48px" />
`;

const IconDocs = (props) => (
    <Container>
        <Title>Icon</Title>
        <Content>
            This element provides a container for icons that adds the corresponding space
            while the icons load. The <code>isSize</code> modifier applies to the container, and 
            the classes needed for the icon depending on your font icons library are passed as the 
            component's class. Because of this, Bloomer currently only supports font icons that 
            use classes to work, and not data attributes like Open Ionic.
        </Content>
        <Title isSize={4}>Font Awesome</Title>
        <Icon isSize="small" className="fa fa-home" />
        <Icon className="fa fa-home fa-lg" />
        <Icon isSize="medium" className="fa fa-home fa-2x" />
        <Icon isSize="large" className="fa fa-home fa-3x" />
        <Highlight>{IconFAExample}</Highlight>

        <Title isSize={4}>Material Design Icons</Title>
        <Icon isSize="small" className="mdi mdi-home" />
        <Icon className="mdi mdi-home mdi-18px" />
        <Icon isSize="medium" className="mdi mdi-home mdi-24px" />
        <Icon isSize="large" className="mdi mdi-home mdi-36px" />
        <Icon isSize="large" className="mdi mdi-home mdi-48px" />
        <Highlight>{IconMDIExample}</Highlight>

        <hr />
        <Title>API</Title>
        <TableDocs rows={IconRows} />
    </Container>
);

export default IconDocs;

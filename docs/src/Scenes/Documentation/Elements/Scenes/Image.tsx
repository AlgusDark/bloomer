import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { Container, Title } from './../../../../../../src';

const ImageRows: Docs.Row[] = [
    {
        prop: 'isSize',
        type: 'string',
        description: <td> <code>16x16</code> | <code>24x24</code> | <code>32x32</code> | <code>48x48</code> | <code>64x64</code> | <code>96x96</code> | <code>128x128</code> </td>,
    },
    {
        prop: 'isRatio',
        type: 'string',
        description: <td> <code>square</code> | <code>1by1</code> | <code>4by3</code> | <code>3by2</code> | <code>16by9</code> | <code>2by1</code> </td>,
    }
]

const ImageDocs = (props) => (
    <Container>
        <Title>Image</Title>
        <TableDocs rows={ImageRows} />
    </Container>
)

export default ImageDocs;
import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { Container, Title, Table, Image, } from './../../../../../../src';

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
        <Table isBordered>
            <thead>
                <tr>
                    <th colSpan={2}>isSize</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Image isSize='16x16' src='https://via.placeholder.com/16x16' /></td>
                    <td><Highlight>{"<Image isSize='16x16' src='https://via.placeholder.com/16x16' />"}</Highlight></td>
                </tr>
                <tr>
                    <td><Image isSize='24x24' src='https://via.placeholder.com/24x24' /></td>
                    <td><Highlight>{"<Image isSize='24x24' src='https://via.placeholder.com/24x24' />"}</Highlight></td>
                </tr>
                <tr>
                    <td><Image isSize='32x32' src='https://via.placeholder.com/32x32' /></td>
                    <td><Highlight>{"<Image isSize='32x32' src='https://via.placeholder.com/32x32' />"}</Highlight></td>
                </tr>
                <tr>
                    <td><Image isSize='48x48' src='https://via.placeholder.com/48x48' /></td>
                    <td><Highlight>{"<Image isSize='48x48' src='https://via.placeholder.com/48x48' />"}</Highlight></td>
                </tr>
                <tr>
                    <td><Image isSize='64x64' src='https://via.placeholder.com/64x64' /></td>
                    <td><Highlight>{"<Image isSize='64x64' src='https://via.placeholder.com/64x64' />"}</Highlight></td>
                </tr>
                <tr>
                    <td><Image isSize='96x96' src='https://via.placeholder.com/96x96' /></td>
                    <td><Highlight>{"<Image isSize='96x96' src='https://via.placeholder.com/96x96' />"}</Highlight></td>
                </tr>
                <tr>
                    <td><Image isSize='128x128' src='https://via.placeholder.com/128x128' /></td>
                    <td><Highlight>{"<Image isSize='128x128' src='https://via.placeholder.com/128x128' />"}</Highlight></td>
                </tr>
            </tbody>
        </Table>

        <Table id='images' isBordered>
            <thead>
                <tr>
                    <th colSpan={2}>isRatio</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Image isRatio='square' src='https://via.placeholder.com/480x480' /></td>
                    <td><Highlight>{"<Image isRatio='square' src='https://via.placeholder.com/480x480' />"}</Highlight></td>
                </tr>
                <tr>
                    <td><Image isRatio='1by1' src='https://via.placeholder.com/480x480' /></td>
                    <td><Highlight>{"<Image isRatio='1by1' src='https://via.placeholder.com/480x480' />"}</Highlight></td>
                </tr>
                <tr>
                    <td><Image isRatio='4by3' src='https://via.placeholder.com/640x480' /></td>
                    <td><Highlight>{"<Image isRatio='4by3' src='https://via.placeholder.com/640x480' />"}</Highlight></td>
                </tr>
                <tr>
                    <td><Image isRatio='3by2' src='https://via.placeholder.com/480x320' /></td>
                    <td><Highlight>{"<Image isRatio='3by2' src='https://via.placeholder.com/480x320' />"}</Highlight></td>
                </tr>
                <tr>
                    <td><Image isRatio='16by9' src='https://via.placeholder.com/640x360' /></td>
                    <td><Highlight>{"<Image isRatio='16by9' src='https://via.placeholder.com/640x360' />"}</Highlight></td>
                </tr>
                <tr>
                    <td><Image isRatio='2by1' src='https://via.placeholder.com/640x320' /></td>
                    <td><Highlight>{"<Image isRatio='2by1' src='https://via.placeholder.com/640x320' />"}</Highlight></td>
                </tr>
            </tbody>
        </Table>

        <hr/>

        <Title>API</Title>
        <TableDocs rows={ImageRows} />
    </Container>
)

export default ImageDocs;
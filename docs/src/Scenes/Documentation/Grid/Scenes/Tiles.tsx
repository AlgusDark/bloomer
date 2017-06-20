import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';
import { render } from './../../Overview/Scenes/Helpers';


import { Container } from './../../../../../../src';
import { Title, Subtitle, Tag, Tile, Box } from './../../../../../../src';

const platforms = (<td><code>mobile</code> | <code>tablet</code> | <code>desktop</code></td>)

const sizes = (<td>
    <code>1</code> |&nbsp;
    <code>2</code> |&nbsp;
    <code>3</code> |&nbsp;
    <code>4</code> |&nbsp;
    <code>5</code> |&nbsp;
    <code>6</code> |&nbsp;
    <code>7</code> |&nbsp;
    <code>8</code> |&nbsp;
    <code>9</code> |&nbsp;
    <code>10</code> |&nbsp;
    <code>11</code> |&nbsp;
    <code>12</code>
</td>)

const tilesRow: Docs.Row[] = [
    {
        prop: 'isSize',
        type: 'number',
        description: sizes,
    },
    {
        prop: 'isAncestor',
        type: 'bool',
    },
    {
        prop: 'isChild',
        type: 'bool',
    },
    {
        prop: 'isParent',
        type: 'bool',
    },
    {
        prop: 'isVertical',
        type: 'bool',
    },
    render('<Tile/>')
]

const TileExample = `<Tile isAncestor>
    <Tile isSize={4} isVertical isParent>
        <Tile isChild render={
            props => (
                <Box {...props}>
                    <Title>One</Title>
                    <p>...</p>
                </Box>
            )
        } />
        <Tile isChild render={
            props => (
                <Box {...props}>
                    <Title>Two</Title>
                    <p>...</p>
                </Box>
            )
        } />
    </Tile>
    <Tile isParent>
        <Tile isChild render={
            props => (
                <Box {...props}>
                    <Title>Three</Title>
                    <p>...</p>
                    <p>...</p>
                </Box>
            )
        } />
    </Tile>
</Tile>
`;

const Columns = (props) => (
    <Container>
        <Title>Tiles</Title>
        <Tile isAncestor>
            <Tile isSize={4} isVertical isParent>
                <Tile isChild render={
                    props => (
                        <Box {...props}>
                            <Title>One</Title>
                            <p>Hodor, hodor, hodor. Hodor hodor. Hodor. Hodor, hodor. Hodor. Hodor, HODOR hodor, hodor hodor. Hodor. Hodor hodor - hodor, hodor. Hodor hodor. Hodor. Hodor HODOR hodor, hodor hodor - hodor?</p>
                        </Box>
                    )
                } />
                <Tile isChild render={
                    props => (
                        <Box {...props}>
                            <Title>Two</Title>
                            <p>Hodor, hodor, hodor. Hodor hodor. Hodor. Hodor, hodor. Hodor. Hodor, HODOR hodor, hodor hodor. Hodor. Hodor hodor - hodor, hodor. Hodor hodor. Hodor. Hodor HODOR hodor, hodor hodor - hodor?</p>
                        </Box>
                    )
                } />
            </Tile>
            <Tile isParent>
                <Tile isChild render={
                    props => (
                        <Box {...props}>
                            <Title>Three</Title>
                            <p>Hodor hodor... Hodor hodor hodor; hodor hodor hodor hodor, hodor, hodor hodor. Hodor hodor HODOR! Hodor hodor - hodor - hodor - hodor. Hodor. Hodor, hodor hodor, hodor. Hodor hodor; hodor hodor. Hodor hodor HODOR! Hodor hodor hodor hodor... Hodor hodor hodor. Hodor. Hodor hodor - hodor... Hodor hodor HODOR hodor, hodor hodor hodor hodor, hodor. Hodor hodor. Hodor hodor; hodor hodor hodor hodor; hodor hodor... Hodor hodor hodor, hodor, hodor hodor. Hodor hodor HODOR! Hodor hodor - hodor - hodor - hodor, hodor, hodor hodor. Hodor, hodor hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor. Hodor hodor - hodor hodor hodor, hodor, hodor hodor. </p>
                            <p>Hodor hodor - HODOR hodor, hodor HODOR hodor, hodor hodor, hodor. Hodor hodor; hodor hodor hodor! Hodor, hodor hodor HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor hodor HODOR! Hodor hodor; hodor HODOR hodor, hodor HODOR hodor, hodor hodor hodor! Hodor. Hodor HODOR hodor, hodor hodor. Hodor. Hodor hodor HODOR! Hodor hodor hodor hodor hodor hodor hodor! </p>
                        </Box>
                    )
                } />
            </Tile>
        </Tile>
        <Highlight className='html'>{TileExample}</Highlight>

        <hr />

        <Title>Tile</Title>
        <TableDocs rows={tilesRow} />
    </Container>
)

export default Columns;
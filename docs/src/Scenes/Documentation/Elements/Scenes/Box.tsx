import * as React from 'react';
import * as Highlight from 'react-highlight';
import { Link } from 'react-router-dom'

import { noModifiers } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle, Box } from './../../../../../../src';

const BoxDocs = (props) => (
    <Container>
        <Title isSpaced>Box</Title>
        <Box>
            {noModifiers}
        </Box>
        <Highlight className='javascript'>
            {`import * as React from 'react';
import { Box } from 'bloomer';

const MyComponent = (props) => (
    <Box>A white box to contain other elements</Box>
)
`}
        </Highlight>
    </Container>
)

export default BoxDocs;
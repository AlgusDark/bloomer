import * as React from 'react';
import * as Highlight from 'react-highlight';
import { Link } from 'react-router-dom'

import { noModifiers } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle, Box } from './../../../../../../src';

const BoxDocs = (props) => (
    <Container>
        <Title>Box</Title>
        <Box>A white box to contain other elements</Box>
        <Highlight>{'<Box>A white box to contain other elements</Box>'}</Highlight>
        <hr/>

        <Title>API</Title>
        <Subtitle>{noModifiers}</Subtitle>
    </Container>
)

export default BoxDocs;
import * as React from 'react';
import * as Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

import { Box, Container, Subtitle, Title } from './../../../../../../src';
import { noModifiers } from './../../Overview/Scenes/Helpers';

const BoxDocs = (props) => (
    <Container>
        <Title>Box</Title>
        <Box>A white box to contain other elements</Box>
        <Highlight>{'<Box>A white box to contain other elements</Box>'}</Highlight>
        <hr/>

        <Title>API</Title>
        <Subtitle>{noModifiers}</Subtitle>
    </Container>
);

export default BoxDocs;

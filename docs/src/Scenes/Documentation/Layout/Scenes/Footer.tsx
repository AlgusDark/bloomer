import * as React from 'react';
import * as Highlight from 'react-highlight';
import { Link } from 'react-router-dom'

import { noModifiers } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle } from './../../../../../../src';

const FooterDocs = (props) => (
    <Container>
        <Title isSpaced>Footer</Title>
        <Subtitle>{noModifiers}</Subtitle>
    </Container>
)

export default FooterDocs;
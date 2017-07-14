import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Container } from './../../../../../../src';
import { Title, Subtitle } from './../../../../../../src';

const startExample = `import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Container, Box  } from 'bloomer';

ReactDOM.render(
    <Container>
        <Box>Hello World!</Box>
    </Container>,
    document.getElementById('root')
)`;

const Start = (props) => (
    <Container>
        <Title isSpaced>How to Start?</Title>
        <Subtitle>1. Install via npm</Subtitle>
        <div className='npm' style={{marginBottom: '1.5rem'}}><code><span className='is-unselectable'>$ </span>npm install bloomer</code></div>
        <Subtitle>
            or use the <a href="https://unpkg.com">unpkg</a> CDN
            <br/>
            <a href="https://unpkg.com/bloomer/bundles/bloomer.min.js">https://unpkg.com/bloomer/bundles/bloomer.min.js</a>
            </Subtitle>

        <hr />

        <Subtitle>2. Make sure to import <a href='http://bulma.io/documentation/overview/start/'>Bulma</a> in your project.</Subtitle>
        <div className='npm' style={{marginBottom: '1.5rem'}}><code><span className='is-unselectable'>$ </span>npm install bulma</code></div>
        <Subtitle>
            <p>Or use the CDN</p>
            <p><a href="https://cdnjs.com/libraries/bulma">https://cdnjs.com/libraries/bulma</a></p>
        </Subtitle>
        <Subtitle>Don't forget to include <a href="http://fontawesome.io/">Font Awesome</a> if you want to use icons.</Subtitle>

        <hr/>

        <Subtitle>3. Import and use Bloomer components.</Subtitle>
        <Highlight className='javascript'>{startExample}</Highlight>
        
        <hr/>
        
        <Subtitle>You're done!</Subtitle>
        <p>
            Since <strong>Bloomer</strong> is written with Typescript, the library is shipped with typings.
            It means that you have the benefit of IntelliSense in your editor.
        </p>
        <p>
            Bloomer has <a href="https://webpack.js.org/guides/tree-shaking/">Tree-Shaking</a> in mind, if your bundle can handle this, then you can
            get the benefit of Bloomer and Tree-Shaking.
        </p>
        <br/>
        <p>Remember, with great power comes great responsibility.</p>
    </Container>
)

export default Start;
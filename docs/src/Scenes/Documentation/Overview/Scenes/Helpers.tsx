import * as React from 'react';
import * as Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { Container } from './../../../../../../src';
import { Title, Subtitle } from './../../../../../../src';

export const noModifiers = <span>No modifiers, only those inherited by the <Link to='/documentation/overview/helpers'>Helpers</Link> modifiers</span>;

const Platforms = {
    type: 'bool | string | string[]',
    description: <td><code>mobile</code> | <code>tablet</code> | <code>touch</code> | <code>desktop</code> | <code>widescreen</code> | <code>tablet-only</code> | <code>desktop-only</code></td>
}

export const colors = <td><code>white</code> | <code>light</code> | <code>dark</code> | <code>black</code> | <code>primary</code> | <code>info</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td>
export const isColor = {
    prop: 'isColor',
    type: 'string',
    description: colors
}

export const isSize = {
    prop: 'isSize',
    type: 'string',
    description: <td><code>large</code> | <code>medium</code> | <code>small</code></td>,
};

export const isAlign = {
    prop: 'isAlign',
    type: 'string',
    description: <td><code>left</code> | <code>centered</code> | <code>right</code></td>,
};

export const render = (component: string) => ({
    prop: 'render',
    type: 'func',
    description: <td>Allows inline rendering of other element. The render prop receives all the props from {`<${component}>`}.</td>,
});

export const states = [
    {
        prop: 'isActive',
        type: 'bool',
    },
    {
        prop: 'isHovered',
        type: 'bool',
    },
    {
        prop: 'isFocused',
        type: 'bool',
    }
];

export const isLoading = {
    prop: 'isLoading',
    type: 'bool',
};

const helpersRows: Docs.Row[] = [
    {
        prop: 'isClearFix',
        type: 'bool',
    },
    {
        prop: 'isPulled',
        type: 'string',
        description: <td><code>left</code> | <code>right</code></td>,
    },
    {
        prop: 'isOverlay',
        type: 'bool',
    },
    {
        prop: 'isFullWidth',
        type: 'bool',
    },
    {
        prop: 'hasTextAlign',
        type: 'string',
        description: <td><code>left</code> | <code>centered</code> | <code>right</code></td>,
    },
    {
        prop: 'hasTextColor',
        type: 'string',
        description: colors,
    },
    {
        prop: 'isMarginless',
        type: 'bool',
    },
    {
        prop: 'isPaddingless',
        type: 'bool',
    },
    {
        prop: 'isUnselectable',
        type: 'bool',
    },

];

const showDescription = (
    <td>
        <code>flex</code> | <code>block</code> | <code>inline</code> | <code>inline-block</code> | <code>inline-flex</code> <br/>
        <code>*-mobile</code> | <code>*-tablet</code> | <code>*-touch</code> | <code>*-desktop</code> | <code>*-widescreen</code> | <code>*-tablet-only</code> | <code>*-desktop-only</code>
        <br/>
        <small>Replace <strong>*</strong> with any of the above values</small>
        <br/><br/>
        <Subtitle style={{marginBottom: 0}}>Object</Subtitle>
        <strong>keys</strong> <code>flex</code> | <code>block</code> | <code>inline</code> | <code>inline-block</code> | <code>inline-flex</code>
        <br/>
        <strong>values</strong> <code>mobile</code> | <code>tablet</code> | <code>touch</code> | <code>desktop</code> | <code>widescreen</code> | <code>tablet-only</code> | <code>desktop-only</code>
        <br/>
        <small>You can pass an Array as value with any of the strings above</small>
    </td>
)

const showRows: Docs.Row[] = [
    {
        prop: 'isDisplay',
        type: 'string | string[] | object',
        description: showDescription,
    },
]

const hiddenRows: Docs.Row[] = [
    {
        prop: 'isHidden',
        type: Platforms.type,
        description: Platforms.description,
    },
]

const Helpers = (props) => (
    <Container>
        <Title>Helpers</Title>
        <Subtitle>You can apply Bulma helper classes to any Bloomer component.</Subtitle>
        <TableDocs rows={helpersRows} />

        <hr />

        <Title tag='h2' isSpaced>Responsive Helpers</Title>
        <Subtitle tag='h3' isSize={5}>Show</Subtitle>
        <TableDocs rows={showRows} />

        <hr />

        <Subtitle isSpaced tag='h3' isSize={5}>Hide</Subtitle>
        <TableDocs rows={hiddenRows} />

        <hr />

        <Title tag='h2'>withHelpersModifiers(Component)</Title>
        <Subtitle tag='h3' isSize={5}>
            You can compose all helpers in your own custom components,
            just pass your component to the <strong>withHelpersModifiers</strong> <em>Higher Order Component</em>.
        </Subtitle>

        <p>MyComponent.jsx</p>
        <Highlight className='javascript'>
            {`import * as React from 'react';
import { withHelpersModifiers  } from 'bloomer';

const MyComponent = (props) => (
    <div {...props}>{props.children}</div>
)

export default withHelpersModifiers(MyComponent);
`}
        </Highlight>

        <p>Other.jsx</p>
        <Highlight className='javascript'>
            {`import * as React from 'react';
import MyComponent from './MyComponent.jsx'

const Other = (props) => (
    <div>
        <MyComponent isFlex='mobile'>Hello World</MyComponent> {/* render :: <div class='is-flex-mobile'>Hello World</div> */}
    </div>
)
`}
        </Highlight>

        <p>If you're using Typescript, you can have the benefit of IntelliSense in your custom components.</p>
    </Container>
)

export default Helpers;
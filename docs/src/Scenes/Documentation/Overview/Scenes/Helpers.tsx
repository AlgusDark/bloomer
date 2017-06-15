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
    description: <td><code>mobile</code> | <code>tablet</code> | <code>touch</code> | <code>desktop</code> | <code>widescreen</code></td>
}

const PlatformsOnly = {
    type: 'string | string[]',
    description: <td><code>tablet</code> | <code>desktop</code></td>
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

const showRows: Docs.Row[] = [
    {
        prop: 'isFlex',
        type: Platforms.type,
        description: Platforms.description,
    },
    {
        prop: 'isFlexOnly',
        type: PlatformsOnly.type,
        description: PlatformsOnly.description,
    },
    {
        prop: 'isBlock',
        type: Platforms.type,
        description: Platforms.description,
    },
    {
        prop: 'isBlockOnly',
        type: PlatformsOnly.type,
        description: PlatformsOnly.description,
    },
    {
        prop: 'isInline',
        type: Platforms.type,
        description: Platforms.description,
    },
    {
        prop: 'isInlineOnly',
        type: PlatformsOnly.type,
        description: PlatformsOnly.description,
    },
    {
        prop: 'isInlineBlock',
        type: Platforms.type,
        description: Platforms.description,
    },
    {
        prop: 'isInlineBlockOnly',
        type: PlatformsOnly.type,
        description: PlatformsOnly.description,
    },
    {
        prop: 'isInlineFlex',
        type: Platforms.type,
        description: Platforms.description,
    },
    {
        prop: 'isInlineFlexOnly',
        type: PlatformsOnly.type,
        description: PlatformsOnly.description,
    },
]

const hiddenRows: Docs.Row[] = [
    {
        prop: 'isHidden',
        type: Platforms.type,
        description: Platforms.description,
    },
    {
        prop: 'isHiddenOnly',
        type: PlatformsOnly.type,
        description: PlatformsOnly.description,
    },
]

const Helpers = (props) => (
    <Container>
        <Title>Helpers</Title>
        <Subtitle>You can apply Bulma helper classes to any Bloomer component.</Subtitle>
        <TableDocs rows={helpersRows} />

        <hr />

        <Title isHeading={2} isSpaced>Responsive Helpers</Title>
        <Subtitle isHeading={3} isSize={5}>Show</Subtitle>
        <TableDocs rows={showRows} />

        <hr />

        <Subtitle isSpaced isHeading={3} isSize={5}>Hide</Subtitle>
        <TableDocs rows={hiddenRows} />

        <hr />

        <Title isHeading={2}>withHelpersModifiers(Component)</Title>
        <Subtitle isHeading={3} isSize={5}>
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
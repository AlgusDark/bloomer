import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Container } from './../../../../../../src/layout';
import { Title, Subtitle, Table, withHelpersModifiers } from './../../../../../../src';

const Helpers = (props) => (
    <Container>
        <Title>Helpers</Title>
        <Subtitle>You can apply Bulma helper classes to any Bloomer component.</Subtitle>
        <Table isStriped className='docs'>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>isClearFix</td>
                    <td colSpan={2}>bool</td>
                </tr>
                <tr>
                    <td>isPulled</td>
                    <td>string</td>
                    <td><code>tablet</code> | <code>desktop</code></td>
                </tr>
                <tr>
                    <td>isOverlay</td>
                    <td colSpan={2}>bool</td>
                </tr>
                <tr>
                    <td>isFullWidth</td>
                    <td colSpan={2}>bool</td>
                </tr>
                <tr>
                    <td>hasTextAlign</td>
                    <td>string</td>
                    <td><code>left</code> | <code>centered</code> | <code>right</code></td>
                </tr>
                <tr>
                    <td>isMarginless</td>
                    <td colSpan={2}>bool</td>
                </tr>
                <tr>
                    <td>isPaddingless</td>
                    <td colSpan={2}>bool</td>
                </tr>
                <tr>
                    <td>isUnselectable</td>
                    <td colSpan={2}>bool</td>
                </tr>
            </tbody>
        </Table>
        <hr />
        <Title isHeading={2} isSpaced>Responsive Helpers</Title>
        <Subtitle isHeading={3} isSize={5}>Show</Subtitle>
        <Table isStriped className='docs'>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>isFlex</td>
                    <td>bool | string | string[]</td>
                    <td><code>mobile</code> | <code>tablet</code> | <code>touch</code> | <code>desktop</code> | <code>widescreen</code></td>
                </tr>
                <tr>
                    <td>isFlexOnly</td>
                    <td>string | string[]</td>
                    <td><code>tablet</code> | <code>desktop</code></td>
                </tr>
                <tr>
                    <td>isBlock</td>
                    <td>bool | string | string[]</td>
                    <td><code>mobile</code> | <code>tablet</code> | <code>touch</code> | <code>desktop</code> | <code>widescreen</code></td>
                </tr>
                <tr>
                    <td>isBlockOnly</td>
                    <td>string | string[]</td>
                    <td><code>tablet</code> | <code>desktop</code></td>
                </tr>
                <tr>
                    <td>isInline</td>
                    <td>bool | string | string[]</td>
                    <td><code>mobile</code> | <code>tablet</code> | <code>touch</code> | <code>desktop</code> | <code>widescreen</code></td>
                </tr>
                <tr>
                    <td>isInlineOnly</td>
                    <td>string | string[]</td>
                    <td><code>tablet</code> | <code>desktop</code></td>
                </tr>
                <tr>
                    <td>isInlineBlock</td>
                    <td>bool | string | string[]</td>
                    <td><code>mobile</code> | <code>tablet</code> | <code>touch</code> | <code>desktop</code> | <code>widescreen</code></td>
                </tr>
                <tr>
                    <td>isInlineBlockOnly</td>
                    <td>string | string[]</td>
                    <td><code>tablet</code> | <code>desktop</code></td>
                </tr>
                <tr>
                    <td>isInlineFlex</td>
                    <td>bool | string | string[]</td>
                    <td><code>mobile</code> | <code>tablet</code> | <code>touch</code> | <code>desktop</code> | <code>widescreen</code></td>
                </tr>
                <tr>
                    <td>isInlineFlexOnly</td>
                    <td>string | string[]</td>
                    <td><code>tablet</code> | <code>desktop</code></td>
                </tr>
            </tbody>
        </Table>
        <hr />
        <Subtitle isSpaced isHeading={3} isSize={5}>Hide</Subtitle>
        <Table isStriped className='docs'>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>isHidden</td>
                    <td>bool | string | string[]</td>
                    <td><code>mobile</code> | <code>tablet</code> | <code>touch</code> | <code>desktop</code> | <code>widescreen</code></td>
                </tr>
                <tr>
                    <td>isHiddenOnly</td>
                    <td>string | string[]</td>
                    <td><code>tablet</code> | <code>desktop</code></td>
                </tr>
            </tbody>
        </Table>
        <hr />
        <Title isHeading={2}>withHelpersModifiers(Component)</Title>
        <Subtitle isHeading={3} isSize={5}>You can compose all helpers in your own custom components, just pass your component to the <strong>withHelpersModifiers</strong> <em>Higher Order Component</em>.</Subtitle>
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
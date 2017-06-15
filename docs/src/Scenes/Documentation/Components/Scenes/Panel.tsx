import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { noModifiers, isSize, isAlign, render } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle, Columns, Column, } from './../../../../../../src';
import { Panel, PanelHeading, PanelBlock, PanelTabs, PanelTab, PanelIcon } from './../../../../../../src';
import { Control, Icon, Input, Checkbox, Button } from './../../../../../../src';

const PanelRows: Docs.Row[] = [
    isSize,
    isAlign,
];

const PageControlRows: Docs.Row[] = [
    {
        prop: 'isPrevious',
        type: 'bool'
    },
    {
        prop: 'isNext',
        type: 'bool'
    },
    {
        prop: 'isActive',
        type: 'bool'
    },
    {
        prop: 'isFocused',
        type: 'bool'
    },
    render('PageControl'),
];

const PanelBlockRows: Docs.Row[] = [
    {
        prop: 'isWrapped',
        type: 'bool'
    },
    {
        prop: 'isLabel',
        type: 'bool',
        description: <td>With this prop, you can turn your rendered element as a <code>label</code></td>,
    },
    {
        prop: 'isActive',
        type: 'bool'
    },
    render('PageLink'),
];

const PanelTabRows: Docs.Row[] = [
    {
        prop: 'isActive',
        type: 'bool'
    },
    render('PageLink'),
];

const PanelExample = `<Panel>
    <PanelHeading>Repositories</PanelHeading>
    <PanelBlock>
        <Control hasIcons='left'>
            <Input isSize='small' placeholder='Search' />
            <Icon isSize='small' isAlign='left'>
                <span className='fa fa-search' aria-hidden='true' />
            </Icon>
        </Control>
    </PanelBlock>
    <PanelTabs>
        <PanelTab isActive>All</PanelTab>
        <PanelTab>Public</PanelTab>
        <PanelTab>Private</PanelTab>
        <PanelTab>Sources</PanelTab>
        <PanelTab>Fork</PanelTab>
    </PanelTabs>
    <PanelBlock isActive>
        <PanelIcon>
            <span className='fa fa-book' aria-hidden='true' />
        </PanelIcon>
        Bloomer
    </PanelBlock>
    <PanelBlock>
        <PanelIcon>
            <span className='fa fa-code-fork' aria-hidden='true' />
        </PanelIcon>
        RxJS
    </PanelBlock>
    <PanelBlock>
        <PanelIcon>
            <span className='fa fa-code-fork' aria-hidden='true' />
        </PanelIcon>
        Webpack
    </PanelBlock>
    <PanelBlock>
        <PanelIcon>
            <span className='fa fa-code-fork' aria-hidden='true' />
        </PanelIcon>
        Typescript
    </PanelBlock>
    <PanelBlock>
        <Checkbox> Remember me</Checkbox>
    </PanelBlock>
    <PanelBlock>
        <Button isOutlined isFullWidth isColor='primary'> Reset all filters</Button>
    </PanelBlock>
</Panel>
`;

const PanelDocs = (props) => (
    <Container>
        <Title>Panel</Title>
        <Columns>
            <Column>
                <Panel>
                    <PanelHeading>Repositories</PanelHeading>
                    <PanelBlock>
                        <Control hasIcons='left'>
                            <Input isSize='small' placeholder='Search' />
                            <Icon isSize='small' isAlign='left'>
                                <span className='fa fa-search' aria-hidden='true' />
                            </Icon>
                        </Control>
                    </PanelBlock>
                    <PanelTabs>
                        <PanelTab isActive>All</PanelTab>
                        <PanelTab>Public</PanelTab>
                        <PanelTab>Private</PanelTab>
                        <PanelTab>Sources</PanelTab>
                        <PanelTab>Fork</PanelTab>
                    </PanelTabs>
                    <PanelBlock href='#' isActive>
                        <PanelIcon>
                            <span className='fa fa-book' aria-hidden='true' />
                        </PanelIcon>
                        Bloomer
                    </PanelBlock>
                    <PanelBlock href='#'>
                        <PanelIcon>
                            <span className='fa fa-code-fork' aria-hidden='true' />
                        </PanelIcon>
                        RxJS
                    </PanelBlock>
                    <PanelBlock href='#'>
                        <PanelIcon>
                            <span className='fa fa-code-fork' aria-hidden='true' />
                        </PanelIcon>
                        Webpack
                    </PanelBlock>
                    <PanelBlock href='#'>
                        <PanelIcon>
                            <span className='fa fa-code-fork' aria-hidden='true' />
                        </PanelIcon>
                        Typescript
                    </PanelBlock>
                    <PanelBlock isLabel>
                        <Checkbox> Remember me</Checkbox>
                    </PanelBlock>
                    <PanelBlock>
                        <Button isOutlined isFullWidth isColor='primary'> Reset all filters</Button>
                    </PanelBlock>
                </Panel>
            </Column>
            <Column isSize={8}>
                <Highlight>{PanelExample}</Highlight>
            </Column>
        </Columns>
        <hr />

        <Title>Panel</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>PanelHeading</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>PanelBlock</Title>
        <TableDocs rows={PanelBlockRows} />

        <hr />

        <Title>PanelTabs</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>PanelTab</Title>
        <TableDocs rows={PanelTabRows} />

        <hr />

        <Title>PanelIcon</Title>
        <Subtitle>{noModifiers}</Subtitle>
    </Container>
)

export default PanelDocs;
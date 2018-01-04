import * as React from 'react';
import * as Highlight from 'react-highlight';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import { Column, Columns, Container, Subtitle, Title} from './../../../../../../src';
import { Button, Checkbox, Control, Icon, Input } from './../../../../../../src';
import { Panel, PanelBlock, PanelHeading, PanelIcon, PanelTab, PanelTabs } from './../../../../../../src';
import { isAlign, isSize, noModifiers, render } from './../../Overview/Scenes/Helpers';

const PanelRows: Docs.Row[] = [
    isSize,
    isAlign,
];

const PageControlRows: Docs.Row[] = [
    {
        prop: 'isPrevious',
        type: 'bool',
    },
    {
        prop: 'isNext',
        type: 'bool',
    },
    {
        prop: 'isActive',
        type: 'bool',
    },
    {
        prop: 'isFocused',
        type: 'bool',
    },
    render('PageControl'),
];

const PanelBlockRows: Docs.Row[] = [
    {
        prop: 'isWrapped',
        type: 'bool',
    },
    {
        prop: 'isActive',
        type: 'bool',
    },
    render('PageLink'),
];

const PanelTabRows: Docs.Row[] = [
    {
        prop: 'isActive',
        type: 'bool',
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
        <PanelIcon className="fa fa-book" />
        Bloomer
    </PanelBlock>
    <PanelBlock>
        <PanelIcon className="fa fa-code-fork" />
        RxJS
    </PanelBlock>
    <PanelBlock>
        <PanelIcon className="fa fa-code-fork" />
        Webpack
    </PanelBlock>
    <PanelBlock>
        <PanelIcon className="fa fa-code-fork" />
        Typescript
    </PanelBlock>
    <PanelBlock tag='label'>
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
                        <Control hasIcons="left">
                            <Input isSize="small" placeholder="Search" />
                            <Icon isSize="small" isAlign="left" className="fa fa-search" />
                        </Control>
                    </PanelBlock>
                    <PanelTabs>
                        <PanelTab isActive>All</PanelTab>
                        <PanelTab>Public</PanelTab>
                        <PanelTab>Private</PanelTab>
                        <PanelTab>Sources</PanelTab>
                        <PanelTab>Fork</PanelTab>
                    </PanelTabs>
                    <PanelBlock href="#" isActive>
                        <PanelIcon className="fa fa-book" />
                        Bloomer
                    </PanelBlock>
                    <PanelBlock href="#">
                        <PanelIcon className="fa fa-code-fork" />
                        RxJS
                    </PanelBlock>
                    <PanelBlock href="#">
                        <PanelIcon className="fa fa-code-fork" />
                        Webpack
                    </PanelBlock>
                    <PanelBlock href="#">
                        <PanelIcon className="fa fa-code-fork" />
                        Typescript
                    </PanelBlock>
                    <PanelBlock tag="label">
                        <Checkbox> Remember me</Checkbox>
                    </PanelBlock>
                    <PanelBlock>
                        <Button isOutlined isFullWidth isColor="primary"> Reset all filters</Button>
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
        <Subtitle>
            By default, <strong>{'<PanelBlock />'}</strong> renders a <strong>{'<div />'}</strong> element,
            but it will render an <strong>{'<a/>'}</strong> element if you provide <strong>href</strong> prop.
            <strong>E.g.</strong> <em><strong>{'<PanelBlock href="#"/>'}</strong></em>.
        </Subtitle>
        <TableDocs rows={PanelBlockRows} />

        <hr />

        <Title>PanelTabs</Title>
        <Subtitle> {noModifiers} </Subtitle>

        <hr />

        <Title>PanelTab</Title>
        <Subtitle>
            By default, <strong>{'<PanelTab />'}</strong> renders a <strong>{'<p />'}</strong> element,
            but it will render an <strong>{'<a/>'}</strong> element if you provide <strong>href</strong> prop.
            <strong>E.g.</strong> <em><strong>{'<PanelTab href="#"/>'}</strong></em>.
        </Subtitle>
        <TableDocs rows={PanelTabRows} />

        <hr />

        <Title>PanelIcon</Title>
        <Subtitle>{noModifiers}</Subtitle>
    </Container>
);

export default PanelDocs;

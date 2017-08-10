import * as React from 'react';
import * as Highlight from 'react-highlight';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import { Button } from './../../../../../../src';
import { Column, Columns } from './../../../../../../src';
import { Container, Subtitle, Title } from './../../../../../../src';
import { Dropdown, DropdownContent, DropdownDivider, DropdownItem, DropdownMenu, DropdownTrigger } from './../../../../../../src';
import { Icon } from './../../../../../../src';
import { noModifiers } from './../../Overview/Scenes/Helpers';

const DropdownRows: Docs.Row[] = [
    {
        description: <td><code>right</code></td>,
        prop: 'isAlign',
        type: 'string',
    },
    {
        description: '',
        prop: 'isActive',
        type: 'boolean',
    },
];

const DropdownBasic = ({ isDropdownOpen, openDropdown }) => (
  <Dropdown>
    <DropdownTrigger onClick={openDropdown}>
      <Button isOutlined aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Dropdown button</span>
        <Icon icon="angle-down" isSize="small" />
      </Button>
    </DropdownTrigger>
    <DropdownMenu className={isDropdownOpen ? 'is-block' : ''}>
      <DropdownContent>
        <DropdownItem href="#">First item</DropdownItem>
        <DropdownItem href="#" isActive>Second item</DropdownItem>
        <DropdownItem href="#">Third item</DropdownItem>
        <DropdownDivider />
        <DropdownItem href="#">Item between dividers</DropdownItem>
        <DropdownDivider />
        <DropdownItem>
            <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
  </Dropdown>
);

const DropdownExample = `<Dropdown>
  <DropdownTrigger onClick={openDropdown}>
    <Button isOutlined aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Dropdown button</span>
      <Icon icon="angle-down" isSize="small" />
    </Button>
  </DropdownTrigger>
  <DropdownMenu>
    <DropdownContent>
      <DropdownItem href="#">First item</DropdownItem>
      <DropdownItem href="#" isActive>Second item</DropdownItem>
      <DropdownItem href="#">Third item</DropdownItem>
      <DropdownDivider />
      <DropdownItem href="#">Item between dividers</DropdownItem>
      <DropdownDivider />
      <DropdownItem>
          <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
      </DropdownItem>
    </DropdownContent>
  </DropdownMenu>
</Dropdown>
`;

class DropdownDocs extends React.Component<{}, { isDropdownOpen: boolean }> {
    state = {
        isDropdownOpen: true,
    };

    openDropdown = () => this.setState((state) => ({ ...state, isDropdownOpen: !state.isDropdownOpen }));

    render() {
      return (
        <Container>
            <Title>Dropdown</Title>
            <Columns>
                <Column isSize="1/3">
                  <DropdownBasic isDropdownOpen={this.state.isDropdownOpen} openDropdown={this.openDropdown} />
                </Column>
                <Column className="is-clipped">
                  <Highlight>{DropdownExample}</Highlight>
                </Column>
            </Columns>

            <hr />
            <Title>Dropdown</Title>
            <TableDocs rows={DropdownRows} />

            <hr />
            <Title>DropdownTrigger</Title>
            <Subtitle>{noModifiers}</Subtitle>

            <hr />
            <Title>DropdownMenu</Title>
            <Subtitle>{noModifiers}</Subtitle>

            <hr />
            <Title>DropdownContent</Title>
            <Subtitle>{noModifiers}</Subtitle>

            <hr />
            <Title>DropdownItemRows</Title>
            <Subtitle>
                By default, <strong>{'<DropdownItem />'}</strong> renders a <strong>{'<div />'}</strong> element,
                but it will render an <strong>{'<a/>'}</strong> element if you provide <strong>href</strong> prop.
                 <strong>E.g.</strong> <em><strong>{'<DropdownItem href="#""/>'}</strong></em>.
            </Subtitle>
        </Container>
      );
    }
}

export default DropdownDocs;

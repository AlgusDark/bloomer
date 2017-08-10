import * as React from 'react';
import * as Highlight from 'react-highlight';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import { Button } from './../../../../../../src';
import { Column, Columns } from './../../../../../../src';
import { Container, Subtitle, Title } from './../../../../../../src';
import { Dropdown, DropdownContent, DropdownDivider, DropdownItem, DropdownMenu, DropdownTrigger } from './../../../../../../src';
import { Icon } from './../../../../../../src';
import { noModifiers, render } from './../../Overview/Scenes/Helpers';

const DropdownRows: Docs.Row[] = [
    {
        description: '',
        prop: 'isActive',
        type: 'boolean',
    },
];

const DropdownBasic = ({ isDropdownOpen, openDropdown }) => (
  <Dropdown isActive>
    <DropdownTrigger onClick={openDropdown}>
      <Button isOutlined aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Dropdown button</span>
        <Icon icon='angle-down' isSize="small" />
      </Button>
    </DropdownTrigger>
    <DropdownMenu className={isDropdownOpen ? 'is-block' : ''}>
      <DropdownContent>
        <DropdownItem href="#">First item</DropdownItem>
        <DropdownItem href="#">Second item</DropdownItem>
        <DropdownItem href="#">Third item</DropdownItem>
        <DropdownDivider></DropdownDivider>
        <DropdownItem href="#">Last item</DropdownItem>
      </DropdownContent>
    </DropdownMenu>
  </Dropdown>
);

const DropdownExample = `<Dropdown>
  <DropdownTrigger>
    <Button isOutlined aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Dropdown button</span>
      <Icon icon='angle-down' isSize="small" />
    </Button>
  </DropdownTrigger>
  <DropdownMenu>
    <DropdownContent>
      <DropdownItem href="#">First item</DropdownItem>
      <DropdownItem href="#">Second item</DropdownItem>
      <DropdownItem href="#">Third item</DropdownItem>
      <DropdownDivider></DropdownDivider>
      <DropdownItem href="#">Last item</DropdownItem>
    </DropdownContent>
  </DropdownMenu>
</Dropdown>
`;

class DropdownDocs extends React.Component<{}, { isDropdownOpen: boolean }> {
    state = {
        isDropdownOpen: true
    };

    openDropdown = () => this.setState((state) => ({ ...state, isDropdownOpen: !state.isDropdownOpen }));

    render() {
      return (
        <Container>
            <Title>Dropdown</Title>
            <Columns>
                <Column isSize={4}>
                  <DropdownBasic isDropdownOpen={this.state.isDropdownOpen} openDropdown={this.openDropdown} />
                </Column>
                <Column><Highlight>{DropdownExample}</Highlight></Column>
            </Columns>
            <hr />
            <Title>Dropdown</Title>
            <TableDocs rows={DropdownRows} />
        </Container>
      )
    }
}

export default DropdownDocs;

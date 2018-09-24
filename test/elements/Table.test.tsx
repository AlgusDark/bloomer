import * as React from 'react';
import { shallow } from 'enzyme';

import { Table } from './../../src/elements/Table';

describe('Table', () => {
    it('should render a table with .table', () => {
        const component = shallow(<Table>My Table</Table>);
        expect(component.contains(<table className='table'>My Table</table>)).toBe(true);
    });

    it('should render a table with .table and modifiers', () => {
        const component = shallow(
            <Table isBordered
                isStriped
                isNarrow />
        );
        expect(component.hasClass('table')).toBe(true);
        expect(component.hasClass('is-bordered')).toBe(true);
        expect(component.hasClass('is-striped')).toBe(true);
        expect(component.hasClass('is-narrow')).toBe(true);
    });

    it('should render a table with .table, modifiers and custom classNames', () => {
        const component = shallow(<Table isStriped className='custom'><span>Any Content</span></Table>);
        expect(component.hasClass('table')).toBe(true);
        expect(component.hasClass('is-striped')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a table with .table and custom classNames', () => {
        const component = shallow(<Table className='custom'><span>Any Content</span></Table>);
        expect(component.hasClass('table')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a table with .table and .table-ishoverable', () => {
        const component = shallow(<Table isHoverable />);
        expect(component.hasClass('table')).toBe(true);
        expect(component.hasClass('is-hoverable')).toBe(true);
    });
});
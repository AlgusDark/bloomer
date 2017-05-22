import * as React from 'react';
import { shallow } from 'enzyme';

import { PageList } from './../../../src/components/Pagination/PageList';

describe('PageList', () => {
    it('should render a ul with .pagination-list', () => {
        const component = shallow(<PageList>My Pagination</PageList>);
        expect(component.contains(<ul className='pagination-list'>My Pagination</ul>)).toBe(true);
    });

    it('should render a ul with .pagination-list and custom classes', () => {
        const component = shallow(<PageList className='custom'><li>Any Content</li></PageList>);
        expect(component.hasClass('pagination-list')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
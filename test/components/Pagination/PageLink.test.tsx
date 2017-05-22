import * as React from 'react';
import { shallow } from 'enzyme';

import { PageLink } from './../../../src/components/Pagination/PageLink';

describe('PageLink', () => {
    it('should render a custom component with PageLink props', () => {
        const customComponent = (props) => (
            <div>
                My Link <a {...props} />
            </div>
        );

        const customComponentRendered = (
            <div>
                My Link <a href='#' className='pagination-link is-active custom' />
            </div>
        );

        const component = shallow(<PageLink href='#' isActive className='custom' render={customComponent} />);
        expect(component.contains(customComponentRendered)).toBe(true);
    });

    it('should render an anchor with custom props', () => {
        const component = shallow(<PageLink isCurrent href='#' className='custom'>My Link</PageLink>);
        expect(component.hasClass('pagination-link')).toBe(true);
        expect(component.hasClass('is-current')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
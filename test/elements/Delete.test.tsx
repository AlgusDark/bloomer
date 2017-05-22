import * as React from 'react';
import { shallow } from 'enzyme';

import { Delete } from './../../src/elements/Delete';

describe('Delete', () => {
    it('should render a custom component with delete props', () => {
        const customComponent = (props) => (
            <div>
                Delete <a {...props} />
            </div>
        );

        const customComponentRendered = (
            <div>
                Delete <a href='#' className='delete' />
            </div>
        );

        const component = shallow(<Delete href='#' render={customComponent} />);
        expect(component.contains(customComponentRendered)).toBe(true);
    });

    it('should render an anchor with .delete', () => {
        const component = shallow(<Delete href='#' />);
        expect(component.contains(<a role='button' href='#' className='delete' />)).toBe(true);
    });

    it('should render a button with .delete', () => {
        const component = shallow(<Delete />);
        expect(component.contains(<button type='button' className='delete' />)).toBe(true);
    });

    it('should render a button with .delete and custom classNames', () => {
        const component = shallow(<Delete className='my-custom-class loader' />);
        expect(component.hasClass('delete')).toBe(true);
        expect(component.hasClass('my-custom-class')).toBe(true);
        expect(component.hasClass('loader')).toBe(true);
    });
});
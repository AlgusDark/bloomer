import * as React from 'react';
import { shallow } from 'enzyme';

import { CardFooterItem } from './../../../../src/components/Card/Footer/CardFooterItem';

describe('CardFooterItem', () => {
    it('should render a custom component with CardFooterItem props', () => {
        const customComponent = (props) => (
            <div>
                My Link <a {...props} />
            </div>
        );

        const customComponentRendered = (
            <div>
                My Link <a className='card-footer-item custom' />
            </div>
        );

        const component = shallow(<CardFooterItem className='custom' render={customComponent} />);
        expect(component.contains(customComponentRendered)).toBe(true);
    });

    it('should render an anchor with .card-footer-item', () => {
        const component = shallow(<CardFooterItem>My CardFooterItem</CardFooterItem>);
        expect(component.contains(<a className='card-footer-item'>My CardFooterItem</a>)).toBe(true);
    });

    it('should render an anchor with .card-footer-item and custom classNames', () => {
        const component = shallow(<CardFooterItem className='custom'><span>Any CardFooterItem</span></CardFooterItem>);
        expect(component.hasClass('card-footer-item')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
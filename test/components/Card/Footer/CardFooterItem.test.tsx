import React from 'react';
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

    it('should render a p with .card-footer-item', () => {
        const component = shallow(<CardFooterItem>My CardFooterItem</CardFooterItem>);
        expect(component.contains(<p className='card-footer-item'>My CardFooterItem</p>)).toBe(true);
    });

    it('should render a div with .card-footer-item', () => {
        const component = shallow(<CardFooterItem tag='div'>My CardFooterItem</CardFooterItem>);
        expect(component.contains(<div className='card-footer-item'>My CardFooterItem</div>)).toBe(true);
    });

    it('should render an anchor with .card-footer-item and custom classNames', () => {
        const component = shallow(<CardFooterItem href='#' className='custom'><span>Any CardFooterItem</span></CardFooterItem>);
        expect(component.is('a')).toBe(true);
        expect(component.hasClass('card-footer-item')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
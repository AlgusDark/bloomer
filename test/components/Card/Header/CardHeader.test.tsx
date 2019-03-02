import React from 'react';
import { shallow } from 'enzyme';

import { CardHeader } from './../../../../src/components/Card/Header/CardHeader';

describe('CardHeader', () => {
    it('should render a header with .card-header', () => {
        const component = shallow(<CardHeader>My CardHeader</CardHeader>);
        expect(component.contains(<header className='card-header'>My CardHeader</header>)).toBe(true);
    });

    it('should render a div with .card-header', () => {
        const component = shallow(<CardHeader tag='div'>My CardHeader</CardHeader>);
        expect(component.contains(<div className='card-header'>My CardHeader</div>)).toBe(true);
    });

    it('should render a header with .card-header and custom classNames', () => {
        const component = shallow(<CardHeader className='custom'><span>Any CardHeader</span></CardHeader>);
        expect(component.hasClass('card-header')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
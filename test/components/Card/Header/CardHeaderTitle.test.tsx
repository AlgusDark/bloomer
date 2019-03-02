import React from 'react';
import { shallow } from 'enzyme';

import { CardHeaderTitle } from './../../../../src/components/Card/Header/CardHeaderTitle';

describe('CardHeaderTitle', () => {
    it('should render a paragraph with .card-header-title', () => {
        const component = shallow(<CardHeaderTitle>My CardHeaderTitle</CardHeaderTitle>);
        expect(component.contains(<p className='card-header-title'>My CardHeaderTitle</p>)).toBe(true);
    });

    it('should render a div with .card-header-title', () => {
        const component = shallow(<CardHeaderTitle tag='div'>My CardHeaderTitle</CardHeaderTitle>);
        expect(component.contains(<div className='card-header-title'>My CardHeaderTitle</div>)).toBe(true);
    });

    it('should render a paragraph with .card-header-title and custom classNames', () => {
        const component = shallow(<CardHeaderTitle className='custom'><span>Any CardHeaderTitle</span></CardHeaderTitle>);
        expect(component.hasClass('card-header-title')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
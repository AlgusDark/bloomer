import React from 'react';
import { shallow } from 'enzyme';

import { ModalCardHeader } from './../../../../src/components/Modal/Card/ModalCardHeader';

describe('ModalCardHeader', () => {
    it('should render a header with .modal-card-head', () => {
        const component = shallow(<ModalCardHeader />);
        expect(component.contains(<header className='modal-card-head'/>)).toBe(true);
    });

    it('should render a div with .modal-card-head', () => {
        const component = shallow(<ModalCardHeader tag='div' />);
        expect(component.contains(<div className='modal-card-head'/>)).toBe(true);
    });

    it('should render a header with .modal-card-head and custom classNames', () => {
        const component = shallow(<ModalCardHeader className='custom' />);
        expect(component.hasClass('modal-card-head')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
import * as React from 'react';
import { shallow } from 'enzyme';

import { ModalCardFooter } from './../../../../src/components/Modal/Card/ModalCardFooter';

describe('ModalCardFooter', () => {
    it('should render a footer with .modal-card-foot', () => {
        const component = shallow(<ModalCardFooter />);
        expect(component.contains(<footer className='modal-card-foot'/>)).toBe(true);
    });

    it('should render a footer with .modal-card-foot and custom classNames', () => {
        const component = shallow(<ModalCardFooter className='custom' />);
        expect(component.hasClass('modal-card-foot')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
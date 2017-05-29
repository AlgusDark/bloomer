import * as React from 'react';
import { shallow } from 'enzyme';

import { ModalCardTitle } from './../../../../src/components/Modal/Card/ModalCardTitle';

describe('ModalCardTitle', () => {
    it('should render a h1 with .modal-card-title', () => {
        const component = shallow(<ModalCardTitle />);
        expect(component.contains(<h1 className='modal-card-title'/>)).toBe(true);
    });

    it('should render a h1 with .modal-card-title and custom classNames', () => {
        const component = shallow(<ModalCardTitle className='custom' />);
        expect(component.hasClass('modal-card-title')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
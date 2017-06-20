import * as React from 'react';
import { shallow } from 'enzyme';

import { ModalContent } from './../../../src/components/Modal/ModalContent';

describe('ModalContent', () => {
    it('should render a div with .modal-content', () => {
        const component = shallow(<ModalContent />);
        expect(component.contains(<div className='modal-content'/>)).toBe(true);
    });

    it('should render a p with .modal-content', () => {
        const component = shallow(<ModalContent tag='p'/>);
        expect(component.contains(<p className='modal-content'/>)).toBe(true);
    });

    it('should render a div with .modal-content and custom classNames', () => {
        const component = shallow(<ModalContent className='custom' />);
        expect(component.hasClass('modal-content')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
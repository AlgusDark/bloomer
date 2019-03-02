import React from 'react';
import { shallow } from 'enzyme';

import { Modal } from './../../../src/components/Modal/Modal';

describe('Modal', () => {
    it('should render a div with .modal', () => {
        const component = shallow(<Modal>My Modal</Modal>);
        expect(component.contains(<div className='modal'>My Modal</div>)).toBe(true);
    });

    it('should render a p with .modal', () => {
        const component = shallow(<Modal tag='p'>My Modal</Modal>);
        expect(component.contains(<p className='modal'>My Modal</p>)).toBe(true);
    });

     it('should render a div with .modal and modifiers', () => {
        const component = shallow(<Modal isActive><span>Any Content</span></Modal>);
        expect(component.hasClass('modal')).toBe(true);
        expect(component.hasClass('is-active')).toBe(true);
    });

     it('should render a div with .modal, modifiers and custom classNames', () => {
        const component = shallow(<Modal isActive className='custom'><span>Any Content</span></Modal>);
        expect(component.hasClass('modal')).toBe(true);
        expect(component.hasClass('is-active')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a div with .modal and custom classNames', () => {
        const component = shallow(<Modal className='custom'><span>Any Content</span></Modal>);
        expect(component.hasClass('modal')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
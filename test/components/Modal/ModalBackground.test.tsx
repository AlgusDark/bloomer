import * as React from 'react';
import { shallow } from 'enzyme';

import { ModalBackground } from './../../../src/components/Modal/ModalBackground';

describe('ModalBackground', () => {
    it('should render a div with .modal-background', () => {
        const component = shallow(<ModalBackground />);
        expect(component.contains(<div className='modal-background'/>)).toBe(true);
    });

    it('should render a p with .modal-background', () => {
        const component = shallow(<ModalBackground tag='p'/>);
        expect(component.contains(<p className='modal-background'/>)).toBe(true);
    });

    it('should render a div with .modal-background and custom classNames', () => {
        const component = shallow(<ModalBackground className='custom' />);
        expect(component.hasClass('modal-background')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
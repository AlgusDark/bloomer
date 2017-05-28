import * as React from 'react';
import { shallow } from 'enzyme';

import { Radio } from './../../../src/elements/Form/Radio';

describe('Radio', () => {
    it('should render a label.radio with input[type="radio"]', () => {
        const component = shallow(<Radio>My Radio</Radio>);
        expect(component.contains(
            <label className='radio' disabled={undefined}>
                <input type='radio'/>My Radio
            </label>
        )).toBe(true);
    });

    it('should render a label.radio:disabled with input[type="radio"]:disabled', () => {
        const component = shallow(<Radio disabled>My Radio</Radio>);
        expect(component.contains(
            <label className='radio' disabled>
                <input type='radio' disabled/>My Radio
            </label>
        )).toBe(true);
    });

    it('should render a label.radio with input[type="radio"] and custom classNames', () => {
        const component = shallow(<Radio className='custom' />);
        expect(component.hasClass('radio')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
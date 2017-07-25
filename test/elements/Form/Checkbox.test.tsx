import * as React from 'react';
import { shallow } from 'enzyme';

import { Checkbox } from './../../../src/elements/Form/Checkbox';

describe('Checkbox', () => {
    it('should render a label.checkbox with input[type="checkbox"]', () => {
        const component = shallow(<Checkbox>My Checkbox</Checkbox>);
        expect(component.contains(
            <label className='checkbox'>
                <input type='checkbox'/>My Checkbox
            </label>
        )).toBe(true);
    });

    it('should render a label.checkbox with input[type="checkbox"] and custom classNames', () => {
        const component = shallow(<Checkbox className='custom' />);
        expect(component.hasClass('checkbox')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});

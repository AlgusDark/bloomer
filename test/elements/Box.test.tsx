import * as React from 'react';
import { shallow } from 'enzyme';

import { Box } from './../../src';

describe('Box', () => {
    it('should render a div with .box', () => {
        const component = shallow(<Box>Any Content</Box>);
        expect(component.contains(<div className='box'>Any Content</div>)).toBe(true);
    });

    it('should render a div with .box and custom classes', () => {
        const component = shallow(<Box className='my-custom-class loader' />);
        expect(component.hasClass('box')).toBe(true);
        expect(component.hasClass('my-custom-class')).toBe(true);
        expect(component.hasClass('loader')).toBe(true);
    });
});
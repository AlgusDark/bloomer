import * as React from 'react';
import { shallow } from 'enzyme';

import { Card } from './../../../src/components/Card/Card';

describe('Card', () => {
    it('should render a div with .card', () => {
        const component = shallow(<Card>My Card</Card>);
        expect(component.contains(<div className='card'>My Card</div>)).toBe(true);
    });

    it('should render a div with .card and custom classNames', () => {
        const component = shallow(<Card className='custom'><span>Any Content</span></Card>);
        expect(component.hasClass('card')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
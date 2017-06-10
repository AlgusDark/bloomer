import * as React from 'react';
import { shallow } from 'enzyme';

import { LevelRight } from './../../../src/components/Level/LevelRight';

describe('LevelRight', () => {
    it('should render an aside with .level-right', () => {
        const component = shallow(<LevelRight>My LevelRight</LevelRight>);
        expect(component.contains(<div className='level-right'>My LevelRight</div>)).toBe(true);
    });

    it('should render an aside with .level-right and custom classNames', () => {
        const component = shallow(<LevelRight className='custom'><span>Any Content</span></LevelRight>);
        expect(component.hasClass('level-right')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
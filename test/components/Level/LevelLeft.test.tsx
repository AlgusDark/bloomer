import * as React from 'react';
import { shallow } from 'enzyme';

import { LevelLeft } from './../../../src/components/Level/LevelLeft';

describe('LevelLeft', () => {
    it('should render a div with .level-left', () => {
        const component = shallow(<LevelLeft>My LevelLeft</LevelLeft>);
        expect(component.contains(<div className='level-left'>My LevelLeft</div>)).toBe(true);
    });

    it('should render an aside with .level-left', () => {
        const component = shallow(<LevelLeft tag='aside'>My LevelLeft</LevelLeft>);
        expect(component.contains(<aside className='level-left'>My LevelLeft</aside>)).toBe(true);
    });

    it('should render a div with .level-left and custom classNames', () => {
        const component = shallow(<LevelLeft className='custom'><span>Any Content</span></LevelLeft>);
        expect(component.hasClass('level-left')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
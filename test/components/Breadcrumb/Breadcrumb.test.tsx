import * as React from 'react';
import { shallow } from 'enzyme';

import { Breadcrumb } from './../../../src/components/Breadcrumb/Breadcrumb';

describe('Breadcrumb', () => {
    it('should render a nav with .breadcrumb', () => {
        const component = shallow(<Breadcrumb>My Breadcrumb</Breadcrumb>);
        expect(component.contains(<nav className='breadcrumb'>My Breadcrumb</nav>)).toBe(true);
    });

    it('should render a p with .breadcrumb', () => {
        const component = shallow(<Breadcrumb tag='p'>My Breadcrumb</Breadcrumb>);
        expect(component.contains(<p className='breadcrumb'>My Breadcrumb</p>)).toBe(true);
    });

    it('should render a nav with .breadcrumb and modifiers', () => {
        const centeredComponent = shallow(<Breadcrumb isAlign='centered'>My Breadcrumb</Breadcrumb>);
        expect(centeredComponent.hasClass('breadcrumb')).toBe(true);
        expect(centeredComponent.hasClass('is-centered')).toBe(true);

        const rightComponent = shallow(<Breadcrumb isAlign='right'>My Breadcrumb</Breadcrumb>);
        expect(rightComponent.hasClass('breadcrumb')).toBe(true);
        expect(rightComponent.hasClass('is-right')).toBe(true);

        const arrowSeparatorComponent = shallow(<Breadcrumb hasSeparator='arrow'>My Breadcrumb</Breadcrumb>);
        expect(arrowSeparatorComponent.hasClass('breadcrumb')).toBe(true);
        expect(arrowSeparatorComponent.hasClass('has-arrow-separator')).toBe(true);

        const bulletSeparatorComponent = shallow(<Breadcrumb hasSeparator='bullet'>My Breadcrumb</Breadcrumb>);
        expect(bulletSeparatorComponent.hasClass('breadcrumb')).toBe(true);
        expect(bulletSeparatorComponent.hasClass('has-bullet-separator')).toBe(true);

        const dotSeparatorComponent = shallow(<Breadcrumb hasSeparator='dot'>My Breadcrumb</Breadcrumb>);
        expect(dotSeparatorComponent.hasClass('breadcrumb')).toBe(true);
        expect(dotSeparatorComponent.hasClass('has-dot-separator')).toBe(true);

        const succeedsSeparatorComponent = shallow(<Breadcrumb hasSeparator='succeeds'>My Breadcrumb</Breadcrumb>);
        expect(succeedsSeparatorComponent.hasClass('breadcrumb')).toBe(true);
        expect(succeedsSeparatorComponent.hasClass('has-succeeds-separator')).toBe(true);
    });

    it('should render a nav with .breadcrumb, modifiers and custom classNames', () => {
        const component = shallow(<Breadcrumb hasSeparator='arrow' className='custom'><span>Any Content</span></Breadcrumb>);
        expect(component.hasClass('breadcrumb')).toBe(true);
        expect(component.hasClass('has-arrow-separator')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a nav with .breadcrumb and custom classNames', () => {
        const component = shallow(<Breadcrumb className='custom'><span>Any Content</span></Breadcrumb>);
        expect(component.hasClass('breadcrumb')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
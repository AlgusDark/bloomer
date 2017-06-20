import * as React from 'react';
import { shallow } from 'enzyme';

import { PanelTab } from './../../../src/components/Panel/PanelTab';

describe('PanelTab', () => {
    it('should render a custom component with PanelTab props', () => {
        const customComponent = (props) => (
            <div>
                My Button <a {...props} />
            </div>
        );

        const customComponentRendered = (
            <div>
                My Button <a href='#' className='is-active custom' />
            </div>
        );

        const component = shallow(<PanelTab href='#' isActive className='custom' render={customComponent} />);
        expect(component.contains(customComponentRendered)).toBe(true);
    });

    it('should render an anchor', () => {
        const component = shallow(<PanelTab href='#'>My PanelTab</PanelTab>);
        expect(component.is('a')).toBe(true);
    });

    it('should render a button', () => {
        const component = shallow(<PanelTab tag='button'>My PanelTab</PanelTab>);
        expect(component.is('button')).toBe(true);
    });

    it('should render an anchor.is-active', () => {
        const component = shallow(<PanelTab isActive href='#'>My PanelTab</PanelTab>);
        expect(component.contains(<a href='#' className='is-active'>My PanelTab</a>)).toBe(true);
    });

    it('should render a p and custom classNames', () => {
        const component = shallow(<PanelTab className='custom'><span>Any Content</span></PanelTab>);
        expect(component.is('p')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
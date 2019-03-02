import React from 'react';
import { shallow } from 'enzyme';

import { PanelTabs } from './../../../src/components/Panel/PanelTabs';

describe('PanelTabs', () => {
    it('should render a div with .panel-tabs', () => {
        const component = shallow(<PanelTabs>My PanelTabs</PanelTabs>);
        expect(component.contains(<div className='panel-tabs'>My PanelTabs</div>)).toBe(true);
    });

    it('should render a p with .panel-tabs', () => {
        const component = shallow(<PanelTabs tag='p'>My PanelTabs</PanelTabs>);
        expect(component.contains(<p className='panel-tabs'>My PanelTabs</p>)).toBe(true);
    });

    it('should render a div with .panel-tabs and custom classNames', () => {
        const component = shallow(<PanelTabs className='custom'><span>Any Content</span></PanelTabs>);
        expect(component.hasClass('panel-tabs')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
import * as React from 'react';
import { shallow } from 'enzyme';

import { PanelIcon } from './../../../src/components/Panel/PanelIcon';

describe('PanelIcon', () => {
    it('should render a span with .panel-icon', () => {
        const component = shallow(<PanelIcon>My PanelIcon</PanelIcon>);
        expect(component.contains(<span className='panel-icon'>My PanelIcon</span>)).toBe(true);
    });

    it('should render a span with .panel-icon and custom classNames', () => {
        const component = shallow(<PanelIcon className='custom'><span>Any Content</span></PanelIcon>);
        expect(component.hasClass('panel-icon')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
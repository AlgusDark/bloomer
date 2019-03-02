import React from 'react';
import { shallow } from 'enzyme';

import { PanelIcon } from './../../../src/components/Panel/PanelIcon';

describe('PanelIcon', () => {
    it('should render a span with .panel-icon', () => {
        const component = shallow(<PanelIcon>My PanelIcon</PanelIcon>);
        expect(component.hasClass('panel-icon')).toBe(true);
    });

    it('should render a span.panel-icon with i.fa.fa-home', () => {
        const component = shallow(<PanelIcon className='fa fa-home' />);
        expect(component.contains(
            <span className='panel-icon'>
                <i className='fa fa-home' aria-hidden="true">
                </i>
            </span>
        )).toBe(true);
    });
});
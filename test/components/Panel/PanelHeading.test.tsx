import * as React from 'react';
import { shallow } from 'enzyme';

import { PanelHeading } from './../../../src/components/Panel/PanelHeading';

describe('PanelHeading', () => {
    it('should render a paragraph with .panel-heading', () => {
        const component = shallow(<PanelHeading>My PanelHeading</PanelHeading>);
        expect(component.contains(<p className='panel-heading'>My PanelHeading</p>)).toBe(true);
    });

    it('should render a paragraph with .panel-heading and custom classNames', () => {
        const component = shallow(<PanelHeading className='custom'><span>Any Content</span></PanelHeading>);
        expect(component.hasClass('panel-heading')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
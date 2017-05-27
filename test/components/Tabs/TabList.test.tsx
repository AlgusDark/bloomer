import * as React from 'react';
import { shallow } from 'enzyme';

import { TabList } from './../../../src/components/Tabs/TabList';

describe('TabList', () => {
    it('should render a ul with children', () => {
        const component = shallow(
            <TabList>
                <li>One</li>
                <li>Two</li>
            </TabList>
        );
        expect(component.contains(<ul>
            <li>One</li>
            <li>Two</li>
        </ul>)).toBe(true);
    });

    it('should render a ul with classNames', () => {
        const component = shallow(<TabList className='custom' />);
        expect(component.hasClass('custom')).toBe(true);
    });


});
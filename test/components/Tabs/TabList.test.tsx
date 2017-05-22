import * as React from 'react';
import { shallow } from 'enzyme';

import { TabList } from './../../../src/components/Tabs/TabList';

describe('TabList', () => {
    const component = shallow(<TabList className='custom'>
        <li>One</li>
        <li>Two</li>
    </TabList>);
    it('should render a ul with props and children', () => {
        expect(component.contains(<ul className='custom'>
            <li>One</li>
            <li>Two</li>
        </ul>)).toBe(true);
    });
});
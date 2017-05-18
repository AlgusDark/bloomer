import * as test from 'tape'
import * as React from 'react'
import { shallow, mount } from 'enzyme';

import { Container, getContainerClasses } from './index';

test('Render Container', t => {
    const wrapper = shallow(<Container />);
    t.equal(wrapper.contains(<div className='container'></div>), true);
    t.end();
});

test('Render Fluid Container', t => {
    const wrapper = shallow(<Container isFluid />);
    t.equal(wrapper.hasClass('container'), true);
    t.equal(wrapper.hasClass('is-fluid'), true);
    t.end();
});
import * as React from 'react';
import { shallow } from 'enzyme';

import { MessageHeader } from './../../../src';

describe('MessageHeader', () => {
    it('should render a div with .message-header', () => {
        const component = shallow(<MessageHeader>My MessageHeader</MessageHeader>);
        expect(component.contains(<div className='message-header'>My MessageHeader</div>)).toBe(true);
    });

    it('should render a div with .message-header and custom classes', () => {
        const component = shallow(<MessageHeader className='custom'><span>Any Content</span></MessageHeader>);
        expect(component.hasClass('message-header')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
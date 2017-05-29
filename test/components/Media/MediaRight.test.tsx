import * as React from 'react';
import { shallow } from 'enzyme';

import { MediaRight } from './../../../src/components/Media/MediaRight';

describe('MediaRight', () => {
    it('should render a div with .media-right', () => {
        const component = shallow(<MediaRight>My MediaRight</MediaRight>);
        expect(component.contains(<div className='media-right'>My MediaRight</div>)).toBe(true);
    });

    it('should render a div with .media-right and custom classNames', () => {
        const component = shallow(<MediaRight className='custom'><span>Any Content</span></MediaRight>);
        expect(component.hasClass('media-right')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
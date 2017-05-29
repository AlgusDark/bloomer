import * as React from 'react';
import { shallow } from 'enzyme';

import { MediaContent } from './../../../src/components/Media/MediaContent';

describe('MediaContent', () => {
    it('should render a div with .media-content', () => {
        const component = shallow(<MediaContent>My MediaContent</MediaContent>);
        expect(component.contains(<div className='media-content'>My MediaContent</div>)).toBe(true);
    });

    it('should render a div with .media-content and custom classNames', () => {
        const component = shallow(<MediaContent className='custom'><span>Any Content</span></MediaContent>);
        expect(component.hasClass('media-content')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
import * as React from 'react';
import { shallow } from 'enzyme';

import { MediaLeft } from './../../../src/components/Media/MediaLeft';

describe('MediaLeft', () => {
  it('should render a div with .media-left', () => {
    const component = shallow(<MediaLeft>My MediaLeft</MediaLeft>);
    expect(
      component.contains(<div className="media-left">My MediaLeft</div>)
    ).toBe(true);
  });

  it('should render a p with .media-left', () => {
    const component = shallow(<MediaLeft tag="p">My MediaLeft</MediaLeft>);
    expect(component.contains(<p className="media-left">My MediaLeft</p>)).toBe(
      true
    );
  });

  it('should render a div with .media-left and custom classNames', () => {
    const component = shallow(
      <MediaLeft className="custom">
        <span>Any Content</span>
      </MediaLeft>
    );
    expect(component.hasClass('media-left')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });
});

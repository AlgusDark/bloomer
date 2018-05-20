import * as React from 'react';
import { shallow } from 'enzyme';

import { Content } from './../../src/elements/Content';

describe('Content', () => {
  it('should render a div with .content', () => {
    const component = shallow(<Content>My Content</Content>);
    expect(component.contains(<div className="content">My Content</div>)).toBe(
      true
    );
  });

  it('should render a p with .content', () => {
    const component = shallow(<Content tag="p">My Content</Content>);
    expect(component.contains(<p className="content">My Content</p>)).toBe(
      true
    );
  });

  it('should render a div with .content and custom classNames', () => {
    const component = shallow(
      <Content className="custom loader">My Content</Content>
    );
    expect(component.hasClass('content')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
    expect(component.hasClass('loader')).toBe(true);
  });
});

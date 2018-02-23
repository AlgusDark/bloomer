import * as React from 'react';
import { shallow } from 'enzyme';

import { Tag } from './../../src/elements/Tag';

describe('Tag', () => {
  it('should render a span with .tag', () => {
    const component = shallow(<Tag>My Tag</Tag>);
    expect(component.contains(<span className="tag">My Tag</span>)).toBe(true);
  });

  it('should render a div with .tag', () => {
    const component = shallow(<Tag tag="div">My Tag</Tag>);
    expect(component.contains(<div className="tag">My Tag</div>)).toBe(true);
  });

  it('should render a span with .tag and modifiers', () => {
    const component = shallow(
      <Tag isColor="black" isSize="large">
        My Tag
      </Tag>
    );
    expect(component.hasClass('tag')).toBe(true);
    expect(component.hasClass('is-black')).toBe(true);
    expect(component.hasClass('is-large')).toBe(true);
  });

  it('should render a span with .tag, modifiers and custom classNames', () => {
    const component = shallow(
      <Tag isColor="primary" className="custom">
        <span>Any Content</span>
      </Tag>
    );
    expect(component.hasClass('tag')).toBe(true);
    expect(component.hasClass('is-primary')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });

  it('should render a span with .tag and custom classNames', () => {
    const component = shallow(
      <Tag className="custom">
        <span>Any Content</span>
      </Tag>
    );
    expect(component.hasClass('tag')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });
});

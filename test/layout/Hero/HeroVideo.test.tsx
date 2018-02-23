import * as React from 'react';
import { shallow } from 'enzyme';

import { HeroVideo } from './../../../src/layout/Hero/HeroVideo';

describe('HeroVideo', () => {
  it('should render a div with .hero-video', () => {
    const container = shallow(<HeroVideo>My HeroVideo</HeroVideo>);
    expect(
      container.contains(<div className="hero-video">My HeroVideo</div>)
    ).toBe(true);
  });

  it('should render a p with .hero-video', () => {
    const container = shallow(<HeroVideo tag="p">My HeroVideo</HeroVideo>);
    expect(container.contains(<p className="hero-video">My HeroVideo</p>)).toBe(
      true
    );
  });

  it('should render a div with .hero-video with modifiers', () => {
    const container = shallow(<HeroVideo isTransparent />);
    expect(container.hasClass('hero-video')).toBe(true);
    expect(container.hasClass('is-transparent')).toBe(true);
  });

  it('should render a div with .hero-video, modifiers and custom classNames', () => {
    const container = shallow(
      <HeroVideo isTransparent className="custom loader" />
    );
    expect(container.hasClass('hero-video')).toBe(true);
    expect(container.hasClass('is-transparent')).toBe(true);
    expect(container.hasClass('custom')).toBe(true);
    expect(container.hasClass('loader')).toBe(true);
  });

  it('should render a div with .hero-video and custom classNames', () => {
    const container = shallow(<HeroVideo className="custom loader" />);
    expect(container.hasClass('hero-video')).toBe(true);
    expect(container.hasClass('custom')).toBe(true);
    expect(container.hasClass('loader')).toBe(true);
  });
});

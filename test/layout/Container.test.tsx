import * as React from 'react';
import { shallow } from 'enzyme';

import { Container } from './../../src/layout/Container';

describe('Container', () => {
  it('should render a div with .container', () => {
    const container = shallow(<Container>My Container</Container>);
    expect(
      container.contains(<div className="container">My Container</div>)
    ).toBe(true);
  });

  it('should render a p with .container', () => {
    const container = shallow(<Container tag="p">My Container</Container>);
    expect(container.contains(<p className="container">My Container</p>)).toBe(
      true
    );
  });

  it('should render a div with .container with modifiers', () => {
    const container = shallow(<Container isFluid />);
    expect(container.hasClass('container')).toBe(true);
    expect(container.hasClass('is-fluid')).toBe(true);
  });

  it('should render a div with .container, modifiers and custom classNames', () => {
    const container = shallow(<Container isFluid className="custom loader" />);
    expect(container.hasClass('container')).toBe(true);
    expect(container.hasClass('is-fluid')).toBe(true);
    expect(container.hasClass('custom')).toBe(true);
    expect(container.hasClass('loader')).toBe(true);
  });

  it('should render a div with .container and custom classNames', () => {
    const container = shallow(<Container className="custom loader" />);
    expect(container.hasClass('container')).toBe(true);
    expect(container.hasClass('custom')).toBe(true);
    expect(container.hasClass('loader')).toBe(true);
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';

import { NavCenter } from './../../../src/components/Nav/NavCenter';

describe('NavCenter', () => {
  it('should render a div with .nav-center', () => {
    const component = shallow(<NavCenter>My NavCenter</NavCenter>);
    expect(
      component.contains(<div className="nav-center">My NavCenter</div>)
    ).toBe(true);
  });

  it('should render a p with .nav-center', () => {
    const component = shallow(<NavCenter tag="p">My NavCenter</NavCenter>);
    expect(component.contains(<p className="nav-center">My NavCenter</p>)).toBe(
      true
    );
  });

  it('should render a div with .nav-center and custom classNames', () => {
    const component = shallow(
      <NavCenter className="custom">
        <span>Any Content</span>
      </NavCenter>
    );
    expect(component.hasClass('nav-center')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });
});

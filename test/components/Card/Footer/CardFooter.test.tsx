import * as React from 'react';
import { shallow } from 'enzyme';

import { CardFooter } from './../../../../src/components/Card/Footer/CardFooter';

describe('CardFooter', () => {
  it('should render a footer with .card-footer', () => {
    const component = shallow(<CardFooter>My CardFooter</CardFooter>);
    expect(
      component.contains(<footer className="card-footer">My CardFooter</footer>)
    ).toBe(true);
  });

  it('should render a div with .card-footer', () => {
    const component = shallow(<CardFooter tag="div">My CardFooter</CardFooter>);
    expect(
      component.contains(<div className="card-footer">My CardFooter</div>)
    ).toBe(true);
  });

  it('should render a footer with .card-footer and custom classNames', () => {
    const component = shallow(
      <CardFooter className="custom">
        <span>Any CardFooter</span>
      </CardFooter>
    );
    expect(component.hasClass('card-footer')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';

import { Notification } from './../../src/elements/Notification';

describe('Notification', () => {
  it('should render a div with .notification', () => {
    const component = shallow(<Notification>My Notification</Notification>);
    expect(
      component.contains(<div className="notification">My Notification</div>)
    ).toBe(true);
  });

  it('should render a p with .notification', () => {
    const component = shallow(
      <Notification tag="p">My Notification</Notification>
    );
    expect(
      component.contains(<p className="notification">My Notification</p>)
    ).toBe(true);
  });

  it('should render a div with .notification and modifiers', () => {
    const component = shallow(
      <Notification isColor="black">My Notification</Notification>
    );
    expect(component.hasClass('notification')).toBe(true);
    expect(component.hasClass('is-black')).toBe(true);
  });

  it('should render a div with .notification, modifiers and custom classNames', () => {
    const component = shallow(
      <Notification isColor="primary" className="custom">
        <span>Any Content</span>
      </Notification>
    );
    expect(component.hasClass('notification')).toBe(true);
    expect(component.hasClass('is-primary')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });

  it('should render a div with .notification and custom classNames', () => {
    const component = shallow(
      <Notification className="custom">
        <span>Any Content</span>
      </Notification>
    );
    expect(component.hasClass('notification')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });
});

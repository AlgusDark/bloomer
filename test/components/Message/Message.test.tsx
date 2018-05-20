import * as React from 'react';
import { shallow } from 'enzyme';

import { Message } from './../../../src/components/Message/Message';

describe('Message', () => {
  it('should render an article with .message', () => {
    const component = shallow(<Message>My Message</Message>);
    expect(
      component.contains(<article className="message">My Message</article>)
    ).toBe(true);
  });

  it('should render a div with .message', () => {
    const component = shallow(<Message tag="div">My Message</Message>);
    expect(component.contains(<div className="message">My Message</div>)).toBe(
      true
    );
  });

  it('should render an article with .message and modifiers', () => {
    const component = shallow(<Message isColor="black">My Message</Message>);
    expect(component.hasClass('message')).toBe(true);
    expect(component.hasClass('is-black')).toBe(true);
  });

  it('should render an article with .message, modifiers and custom classNames', () => {
    const component = shallow(
      <Message isColor="primary" className="custom">
        <span>Any Content</span>
      </Message>
    );
    expect(component.hasClass('message')).toBe(true);
    expect(component.hasClass('is-primary')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });

  it('should render an article with .message and custom classNames', () => {
    const component = shallow(
      <Message className="custom">
        <span>Any Content</span>
      </Message>
    );
    expect(component.hasClass('message')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';

import { TextArea } from './../../src/elements/Form/TextArea';

describe('TextArea', () => {
  it('should render a textarea with .textarea', () => {
    const component = shallow(<TextArea>My TextArea</TextArea>);
    expect(
      component.contains(<textarea className="textarea">My TextArea</textarea>)
    ).toBe(true);
  });

  it('should render a textarea with .textarea with modifiers', () => {
    const component = shallow(
      <TextArea isActive isFocused className="custom" />
    );
    expect(component.hasClass('textarea')).toBe(true);
    expect(component.hasClass('is-active')).toBe(true);
    expect(component.hasClass('is-focused')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });

  it('should render a textarea with .textarea with modifiers and custom classNames', () => {
    const component = shallow(<TextArea isActive className="custom" />);
    expect(component.hasClass('textarea')).toBe(true);
    expect(component.hasClass('is-active')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });

  it('should render a textarea with .textarea and custom classNames', () => {
    const component = shallow(<TextArea className="custom" />);
    expect(component.hasClass('textarea')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });
});

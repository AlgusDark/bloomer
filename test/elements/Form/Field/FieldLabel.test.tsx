import * as React from 'react';
import { shallow } from 'enzyme';

import { FieldLabel } from './../../../../src/elements/Form/Field/FieldLabel';

describe('FieldLabel', () => {
  it('should render a div with .field-label', () => {
    const component = shallow(
      <FieldLabel>
        <span>Any Content</span>
      </FieldLabel>
    );
    expect(
      component.contains(
        <div className="field-label">
          <span>Any Content</span>
        </div>
      )
    ).toBe(true);
  });

  it('should render a p with .field-label', () => {
    const component = shallow(
      <FieldLabel tag="p">
        <span>Any Content</span>
      </FieldLabel>
    );
    expect(
      component.contains(
        <p className="field-label">
          <span>Any Content</span>
        </p>
      )
    ).toBe(true);
  });

  it('should render a div with .field-label and modifiers', () => {
    const component = shallow(<FieldLabel isNormal />);
    expect(component.hasClass('field-label')).toBe(true);
    expect(component.hasClass('is-normal')).toBe(true);
  });

  it('should render a div with .field-label, modifiers and custom classNames', () => {
    const component = shallow(
      <FieldLabel isSize="large" className="custom">
        <span>Any Content</span>
      </FieldLabel>
    );
    expect(component.hasClass('field-label')).toBe(true);
    expect(component.hasClass('is-large')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });

  it('should render a div with .field-label and custom classNames', () => {
    const component = shallow(
      <FieldLabel className="custom">
        <span>Any Content</span>
      </FieldLabel>
    );
    expect(component.hasClass('field-label')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });
});

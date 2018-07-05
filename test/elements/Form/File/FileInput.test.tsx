import * as React from 'react';
import { shallow } from 'enzyme';

import { FileInput } from './../../../../src/elements/Form/File/FileInput';

describe('FileCTA', () => {
  it('should render an input with .file-input', () => {
    const component = shallow(<FileInput />);
    expect(component.contains(<input type='file' className='file-input' />)).toBe(true);
  });

  it('should render an input with .file-input and custom className', () => {
    const component = shallow(<FileInput className="custom class" />);
    expect(component.hasClass('file-input')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
    expect(component.hasClass('class')).toBe(true);
  })
})
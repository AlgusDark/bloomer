import * as React from 'react';
import { shallow } from 'enzyme';

import { FileLabel } from './../../../../src/elements/Form/File/FileLabel';

describe('FileCTA', () => {
  it('should render a label with .file-label', () => {
    const component = shallow(<FileLabel><span>Any Content</span></FileLabel>);
    expect(component.contains(<label className="file-label"><span>Any Content</span></label>)).toBe(true);
  });

  it('should render a p with .file-label', () => {
    const component = shallow(<FileLabel tag='p'><span>Any Content</span></FileLabel>);
    expect(component.contains(<p className="file-label"><span>Any Content</span></p>)).toBe(true);
  })

  it('should render a label with .file-name and custom className', () => {
    const component = shallow(<FileLabel className="custom class" />);
    expect(component.hasClass('file-label')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
    expect(component.hasClass('class')).toBe(true);
  })
})
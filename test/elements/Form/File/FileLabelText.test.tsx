import * as React from 'react';
import { shallow } from 'enzyme';

import { FileLabelText } from './../../../../src/elements/Form/File/FileLabelText';

describe('FileCTA', () => {
  it('should render a span with .file-label', () => {
    const component = shallow(<FileLabelText><span>Any Content</span></FileLabelText>);
    expect(component.contains(<span className="file-label"><span>Any Content</span></span>)).toBe(true);
  });

  it('should render a p with .file-label', () => {
    const component = shallow(<FileLabelText tag='p'><span>Any Content</span></FileLabelText>);
    expect(component.contains(<p className="file-label"><span>Any Content</span></p>)).toBe(true);
  })

  it('should render a span with .file-name and custom className', () => {
    const component = shallow(<FileLabelText className="custom class" />);
    expect(component.hasClass('file-label')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
    expect(component.hasClass('class')).toBe(true);
  })
})
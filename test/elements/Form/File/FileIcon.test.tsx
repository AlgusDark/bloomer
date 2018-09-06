import * as React from 'react';
import { shallow } from 'enzyme';

import { FileIcon } from './../../../../src/elements/Form/File/FileIcon';

describe('FileCTA', () => {
  it('should render a span with .file-icon', () => {
    const component = shallow(<FileIcon><span>Any Content</span></FileIcon>);
    expect(component.contains(<span className="file-icon"><span>Any Content</span></span>)).toBe(true);
  });

  it('should render a p with .file-icon', () => {
    const component = shallow(<FileIcon tag='p'><span>Any Content</span></FileIcon>);
    expect(component.contains(<p className="file-icon"><span>Any Content</span></p>)).toBe(true);
  })

  it('should render a span with .file-icon and custom className', () => {
    const component = shallow(<FileIcon className="custom class" />);
    expect(component.hasClass('file-icon')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
    expect(component.hasClass('class')).toBe(true);
  })
})
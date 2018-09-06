import * as React from 'react';
import { shallow } from 'enzyme';

import { FileName } from './../../../../src/elements/Form/File/FileName';

describe('FileCTA', () => {
  it('should render a span with .file-name', () => {
    const component = shallow(<FileName><span>Any Content</span></FileName>);
    expect(component.contains(<span className="file-name"><span>Any Content</span></span>)).toBe(true);
  });

  it('should render a p with .file-name', () => {
    const component = shallow(<FileName tag='p'><span>Any Content</span></FileName>);
    expect(component.contains(<p className="file-name"><span>Any Content</span></p>)).toBe(true);
  })

  it('should render a span with .file-name and custom className', () => {
    const component = shallow(<FileName className="custom class" />);
    expect(component.hasClass('file-name')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
    expect(component.hasClass('class')).toBe(true);
  })
})
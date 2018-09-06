import * as React from 'react';
import { shallow } from 'enzyme';

import { FileCTA } from './../../../../src/elements/Form/File/FileCTA';

describe('FileCTA', () => {
  it('should render a span with .file-cta', () => {
    const component = shallow(<FileCTA><span>Any Content</span></FileCTA>);
    expect(component.contains(<span className="file-cta"><span>Any Content</span></span>)).toBe(true);
  });

  it('should render a p with .file-cta', () => {
    const component = shallow(<FileCTA tag='p'><span>Any Content</span></FileCTA>);
    expect(component.contains(<p className="file-cta"><span>Any Content</span></p>)).toBe(true);
  })

  it('should render a span with .file-cta and custom className', () => {
    const component = shallow(<FileCTA className="custom class" />);
    expect(component.hasClass('file-cta')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
    expect(component.hasClass('class')).toBe(true);
  })
})
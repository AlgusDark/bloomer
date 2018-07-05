import * as React from 'react';
import { shallow } from 'enzyme';

import { File } from './../../../../src/elements/Form/File/File';

describe('File', () => {
  it('should render a div with .file', () => {
    const component = shallow(<File><span>Any Content</span></File>);
    expect(component.contains(<div className='file'><span>Any Content</span></div>)).toBe(true);
  });

  it('should render a p with .file', () => {
    const component = shallow(<File tag='p'><span>Any Content</span></File>);
    expect(component.contains(<p className='file'><span>Any Content</span></p>)).toBe(true);
  })

  it('should render a div with .file and .has-name', () => {
    const component = shallow(<File hasName/>);
    expect(component.hasClass('file')).toBe(true);
    expect(component.hasClass('has-name')).toBe(true);
  });

  it('should render a div with .file and .is-right', () => {
    const component = shallow(<File isAlign='right' />);
    expect(component.hasClass('file')).toBe(true);
    expect(component.hasClass('is-right')).toBe(true);
  })

  it('should render a div with .file and .is-boxed', () => {
    const component = shallow(<File isBoxed />);
    expect(component.hasClass('file')).toBe(true);
    expect(component.hasClass('is-boxed')).toBe(true);
  })

  it('should render a div with .file and both .has-name and .is-boxed', () => {
    const component = shallow(<File hasName isBoxed />);
    expect(component.hasClass('file')).toBe(true);
    expect(component.hasClass('has-name')).toBe(true);
    expect(component.hasClass('is-boxed')).toBe(true);
  })

  it('should render a div with .file and modifiers and custom classNames', () => {
    const component = shallow(<File hasName isBoxed className="custom class" />);
    expect(component.hasClass('file')).toBe(true);
    expect(component.hasClass('has-name')).toBe(true);
    expect(component.hasClass('is-boxed')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
    expect(component.hasClass('class')).toBe(true);
  })

  it('should render a div with .file and custom classNames', () => {
    const component = shallow(<File className="custom class" />);
    expect(component.hasClass('file')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
    expect(component.hasClass('class')).toBe(true);
  })
});
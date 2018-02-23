import * as React from 'react';
import { shallow } from 'enzyme';

import { Page } from './../../../src/components/Pagination/Page';

describe('Page', () => {
  it('should render a li', () => {
    const component = shallow(<Page>My Link</Page>);
    expect(component.contains(<li>My Link</li>)).toBe(true);
  });

  it('should render a p', () => {
    const component = shallow(<Page tag="p">My Link</Page>);
    expect(component.contains(<p>My Link</p>)).toBe(true);
  });

  it('should render a li with custom classNames', () => {
    const component = shallow(<Page className="custom">My Link</Page>);
    expect(component.hasClass('custom')).toBe(true);
  });
});

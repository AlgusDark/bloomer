import * as React from 'react';
import { shallow } from 'enzyme';

import { Pagination } from './../../../src/components/Pagination/Pagination';

describe('Pagination', () => {
  it('should render a nav with .pagination', () => {
    const component = shallow(<Pagination>My Pagination</Pagination>);
    expect(
      component.contains(<nav className="pagination">My Pagination</nav>)
    ).toBe(true);
  });

  it('should render a div with .pagination', () => {
    const component = shallow(<Pagination tag="div">My Pagination</Pagination>);
    expect(
      component.contains(<div className="pagination">My Pagination</div>)
    ).toBe(true);
  });

  it('should render a nav with .pagination and modifiers', () => {
    const component = shallow(
      <Pagination isSize="medium">My Pagination</Pagination>
    );
    expect(component.hasClass('pagination')).toBe(true);
    expect(component.hasClass('is-medium')).toBe(true);
  });

  it('should render a nav with .pagination and custom classNames', () => {
    const component = shallow(
      <Pagination isSize="medium" className="custom">
        <span>Any Content</span>
      </Pagination>
    );
    expect(component.hasClass('pagination')).toBe(true);
    expect(component.hasClass('is-medium')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });
});

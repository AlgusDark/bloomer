import * as React from 'react';
import { shallow } from 'enzyme';

import { PageLink } from './../../../src/components/Pagination/PageLink';

describe('PageLink', () => {
  it('should render a custom component with PageLink props', () => {
    const customComponent = props => (
      <div>
        My Link <a {...props} />
      </div>
    );

    const customComponentRendered = (
      <div>
        My Link <a href="#" className="pagination-link is-active custom" />
      </div>
    );

    const component = shallow(
      <PageLink href="#" isActive className="custom" render={customComponent} />
    );
    expect(component.contains(customComponentRendered)).toBe(true);
  });

  it('should render an anchor', () => {
    const component = shallow(<PageLink href="#">My Link</PageLink>);
    expect(
      component.contains(
        <a href="#" className="pagination-link">
          My Link
        </a>
      )
    );
  });

  it('should render an anchor', () => {
    const component = shallow(<PageLink tag="button">My Link</PageLink>);
    expect(
      component.contains(<button className="pagination-link">My Link</button>)
    );
  });

  it('should render an anchor with .pagination-link and modifiers', () => {
    const component = shallow(<PageLink isActive isCurrent isFocused />);
    expect(component.hasClass('pagination-link')).toBe(true);
    expect(component.hasClass('is-active')).toBe(true);
    expect(component.hasClass('is-current')).toBe(true);
    expect(component.hasClass('is-focused')).toBe(true);
  });

  it('should render an anchor with .pagination-link, modifiers and custom classNames', () => {
    const component = shallow(
      <PageLink href="#" isCurrent className="custom" />
    );
    expect(component.hasClass('pagination-link')).toBe(true);
    expect(component.hasClass('is-current')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });

  it('should render an anchor with .pagination-link, and custom classNames', () => {
    const component = shallow(<PageLink isCurrent className="custom" />);
    expect(component.hasClass('pagination-link')).toBe(true);
    expect(component.hasClass('is-current')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });
});

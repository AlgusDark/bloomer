import * as React from 'react';
import { shallow } from 'enzyme';

import { TabLink } from './../../../src/components/Tabs/TabLink';

describe('TabLink', () => {
  it('should render a custom component with HTML props', () => {
    const customComponent = props => (
      <div>
        My Link <a {...props} />
      </div>
    );

    const customComponentRendered = (
      <div>
        My Link <a href="#" className="custom" />
      </div>
    );

    const component = shallow(
      <TabLink href="#" className="custom" render={customComponent} />
    );
    expect(component.contains(customComponentRendered)).toBe(true);
  });

  it('should render a button with custom props', () => {
    const component = shallow(<TabLink tag="button" className="custom" />);
    expect(component.contains(<button className="custom" />)).toBe(true);
  });

  it('should render an anchor with custom props', () => {
    const component = shallow(<TabLink href="#" className="custom" />);
    expect(component.contains(<a href="#" className="custom" />)).toBe(true);
  });
});

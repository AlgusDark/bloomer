import * as React from 'react';
import { shallow } from 'enzyme';

import { Panel } from './../../../src/components/Panel/Panel';

describe('Panel', () => {
  it('should render a nav with .panel', () => {
    const component = shallow(<Panel>My Panel</Panel>);
    expect(component.contains(<nav className="panel">My Panel</nav>)).toBe(
      true
    );
  });

  it('should render a div with .panel', () => {
    const component = shallow(<Panel tag="div">My Panel</Panel>);
    expect(component.contains(<div className="panel">My Panel</div>)).toBe(
      true
    );
  });

  it('should render a nav with .panel and custom classNames', () => {
    const component = shallow(
      <Panel className="custom">
        <span>Any Content</span>
      </Panel>
    );
    expect(component.hasClass('panel')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });
});

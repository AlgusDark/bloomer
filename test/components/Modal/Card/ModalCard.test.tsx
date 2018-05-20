import * as React from 'react';
import { shallow } from 'enzyme';

import { ModalCard } from './../../../../src/components/Modal/Card/ModalCard';

describe('ModalCard', () => {
  it('should render a div with .modal-card', () => {
    const component = shallow(<ModalCard />);
    expect(component.contains(<div className="modal-card" />)).toBe(true);
  });

  it('should render a p with .modal-card', () => {
    const component = shallow(<ModalCard tag="p" />);
    expect(component.contains(<p className="modal-card" />)).toBe(true);
  });

  it('should render a p with .modal-card and custom classNames', () => {
    const component = shallow(<ModalCard className="custom" />);
    expect(component.hasClass('modal-card')).toBe(true);
    expect(component.hasClass('custom')).toBe(true);
  });
});

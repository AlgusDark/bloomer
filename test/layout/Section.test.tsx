import * as React from 'react';
import { shallow } from 'enzyme';

import { Section } from './../../src';

describe('Section', () => {
    it('should render a section with .section', () => {
        const container = shallow(<Section>My Section</Section>);
        expect(container.contains(<section className='section'>My Section</section>)).toBe(true)
    });

    it('should render a section with .section.is-large', () => {
        const container = shallow(<Section isLarge/>);
        expect(container.hasClass('section')).toBe(true);
        expect(container.hasClass('is-large')).toBe(true);
    });

    it('should render a section with .section.is-medium', () => {
        const container = shallow(<Section isMedium/>);
        expect(container.hasClass('section')).toBe(true);
        expect(container.hasClass('is-medium')).toBe(true);
    });

    it('should render a section with .section with custom classNames', () => {
        const container = shallow(<Section isLarge className='custom' />);
        expect(container.hasClass('section')).toBe(true);
        expect(container.hasClass('is-large')).toBe(true);
        expect(container.hasClass('custom')).toBe(true);
    });
});
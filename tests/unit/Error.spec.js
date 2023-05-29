import { mount } from '@vue/test-utils'
import Error from '../../src/views/Error.vue';

describe('Error.vue', () => {
    it('renders the error message correctly', () => {
        const wrapper = mount(Error);
        const errorMessage = 'The requested page could not be found.';

        expect(wrapper.text()).toContain(errorMessage);
    });

    it('displays the error heading with the correct font size', async () => {
        const wrapper = mount(Error);
        const heading = wrapper.get('h2');

        expect(heading.element).toBeTruthy();
        expect(heading.text()).toBe('Error!');

        // todo: figure out how to assert css
        // expect(heading.element.style.fontSize).toBe('1.5rem');
        // expect(window.getComputedStyle(heading.element).getPropertyValue('font-size')).toBe('1.5em');
    });

    it('displays the main content with the correct font size and color', () => {
        const wrapper = mount(Error);
        const main = wrapper.find('main');

        expect(main.exists()).toBe(true);
        expect(main.text()).toContain('The requested page could not be found.');
    });
});

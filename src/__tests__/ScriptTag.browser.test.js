import React from 'react';
import { mount } from './enzyme';
import ScriptTag from './TestScript';

// TODO: CodeCov test config, circleci deployment(s)

describe('Browser render', () => {

    test('client hydrate does not append additional DOM element', () => {
        const wrapper = mount(<ScriptTag isHydrating={true} type="text/javascript" src="test_script.js" />);
        expect(wrapper.html()).not.toContain('data-appended');
    });

    test('client render appends additional DOM element', () => {
        const wrapper = mount(<ScriptTag type="text/javascript" src="test_script.js" />);
        expect(wrapper.html()).toContain('data-appended');
    });

    test('client render appends additional DOM element using dangerouslySetInnerHTML', () => {
        const wrapper = mount(<ScriptTag type="text/javascript" dangerouslySetInnerHTML={{__html: 'console.log("appended");'}} />);
        expect(wrapper.html()).toContain('console.log("appended")');
    });

    test('client update appends additional DOM element', () => {
        const wrapper = mount(<ScriptTag type="text/javascript" src="test_script.js" />);

        wrapper.setProps({
            src: 'other.js'
        });

        expect(wrapper.html()).toContain('other.js');
    });

    test('client unmount removes additional DOM element', () => {
        const wrapper = mount(<ScriptTag type="text/javascript" src="test_script.js" />);
        wrapper.unmount();

        expect(wrapper.find('script')).toHaveLength(0);
    });
});

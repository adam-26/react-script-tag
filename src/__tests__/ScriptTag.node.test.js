// @flow
import React from 'react';
import ScriptTag from './TestScript';
import { renderToString } from 'react-dom/server';

describe('Server render', () => {

    test('does not append additional DOM element', () => {
        const html = renderToString(<ScriptTag type="text/javascript" src="src/__tests__/scripts/test_script.js" />);
        expect(html).not.toContain('data-appended');
    });
});

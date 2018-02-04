// @flow
import React from 'react';
import ScriptTag from '../ScriptTag';

// Use a test harness to allow use of 'mount()' to 'setProps()' to <ScriptTag> using root element
// - the <div> wrapper is required for to make the appended DOM elements accessible for testing
export default class TestScript extends React.Component {

    render() {
        return (
            <div>
                <ScriptTag {...this.props} />
            </div>
        );
    }
}

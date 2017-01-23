import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Suppresses Warning: Unknown prop `onTouchTap` when testing Material-ui component
injectTapEventPlugin();

// Suppresses Warning: Material-UI: userAgent should be supplied in the muiTheme context
// for server-side rendering.
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

// Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body><div id="root"></div></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

// Build helper for simulating events
$.fn.simulate = function(eventName, value) {
    if (value) {
        this.val(value);
    }
    TestUtils.Simulate[eventName](this[0]);
}

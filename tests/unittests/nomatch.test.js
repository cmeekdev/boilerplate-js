import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { spy } from 'sinon'

import NoMatch from '../../src/client/nomatch'

describe('<NoMatch />', () => {
    it('calls componentDidMount', () => {
        spy(NoMatch.prototype, 'componentDidMount');
        const _wrapper = mount(<NoMatch />);
        expect(NoMatch.prototype.componentDidMount.calledOnce).to.equal(true)
    })
});
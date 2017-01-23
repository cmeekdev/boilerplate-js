import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { spy } from 'sinon'

import Home from '../../src/client/home'

describe('<Home />', () => {
    it('calls componentDidMount', () => {
        spy(Home.prototype, 'componentDidMount');
        const _wrapper = mount(<Home />);
        expect(Home.prototype.componentDidMount.calledOnce).to.equal(true)
    })
});
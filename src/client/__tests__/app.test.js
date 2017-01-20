import React from 'react'
import { expect } from 'chai'
import sinon from 'sinon'
import { mount } from 'enzyme'

import App from '../app'

describe('<App />', () => {
    it('calls componentDidMount', () => {
        sinon.spy(App.prototype, 'compnentDidMount');
        const wrapper = mount(<App />);

        expect(App.prototype.componentDidMount.calledOnce).to.equal(true)
    })
});
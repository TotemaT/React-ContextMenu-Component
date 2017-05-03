import React from 'react';

import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import ContextMenuItem from '../ContextMenuItem';

describe('<ContextMenuItem />', () => {
    it('should render only one div with class contextMenu--option', () => {
        const item = shallow(<ContextMenuItem label="Label"/>);
        expect(item.find('div.contextMenu--option')).to.have.length(1);
        expect(item.find('div.contextMenu--separator')).to.have.length(0);
    });

    it('should render only one div with class contextMenu--separator', () => {
        const item = shallow(<ContextMenuItem label="separator"/>);
        expect(item.find('div.contextMenu--separator')).to.have.length(1);
        expect(item.find('div.contextMenu--option')).to.have.length(0);
    });

    it('should not be disabled when disabled is not set', () => {
        const item = shallow(<ContextMenuItem label="disabled"/>);
        expect(item.find('div').html()).not.includes('disabled=""');
    });

    it('should be disabled when disabled is set to true', () => {
        const item = shallow(<ContextMenuItem label="disabled" disabled={true}/>);
        expect(item.find('div').html()).includes('disabled=""');
    });

    it('simulates click event only when onClick is passed', () => {
        const onClick = sinon.spy();
        const itemWithClickHandler = shallow(<ContextMenuItem label="clickable" onClick={onClick}/>);
        const itemWithoutClickHandler = shallow(<ContextMenuItem label="Not clickable"/>);
        itemWithClickHandler.simulate('click');
        itemWithoutClickHandler.simulate('click');
        expect(onClick.calledOnce).to.equal(true);
    });
});

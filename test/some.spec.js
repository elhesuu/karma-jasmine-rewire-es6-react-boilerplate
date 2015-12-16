import MyComponent from '../src/my-component.js';
import TestUtils from 'react-addons-test-utils';
import React from 'react';

const renderer = TestUtils.createRenderer();

function render (Component) {
	const element = React.createElement(Component);
	renderer.render(element);
	return renderer.getRenderOutput();
}

describe('A test', function () {

	it('should create a React element with the specified type', function () {
		const element = React.createElement(MyComponent);
		expect(TestUtils.isElementOfType(element, MyComponent)).toBe(true);
	});

	it('should render the proper class name', function () {
		MyComponent.__Rewire__('getRealData', () => 'fake');
		const rendered = render(MyComponent);
		expect(rendered.props.className).not.toBe('real');
		expect(rendered.props.className).toBe('fake');
	});

});
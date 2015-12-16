import React, { Component } from 'react';
import getRealData from './some-dependency';


export default class MyComponent extends Component {
	render () {
		const someClassName = getRealData();
		return (
			<div className={ someClassName } />
		)
	}
}
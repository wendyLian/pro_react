'use strict';

/**
 * 大数据 - 指数榜单
 */

define(['mods', paths.rcn.util + '/rest.js', './comp.js'], function (mods, r, Comp) {

	var rest = r.bigdata({
		// stringifyData: false
	});

	var React = mods.ReactPack.default;
	var ReactDOM = mods.ReactDom.default;

	var Industry = React.createClass({
		displayName: 'Industry',

		getInitialState: function getInitialState() {
			return {};
		},
		componentDidMount: function componentDidMount() {},
		render: function render() {
			return React.createElement(Comp, null);
		}
	});

	return Industry;
});
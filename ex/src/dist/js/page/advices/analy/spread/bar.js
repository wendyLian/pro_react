'use strict';

define(['mods',
// paths.rcn.plu + '/echarts.min.js'
'echarts'], function (mods, echarts) {
	var React = mods.ReactPack.default;

	var Bar = React.createClass({
		displayName: 'Bar',

		getDefaultProps: function getDefaultProps() {
			return {
				title: '',
				height: '400px',
				options: {}
			};
		},
		getProps: function getProps(props) {
			var _ref = props || {};

			var title = _ref.title;
			var subTitle = _ref.subTitle;
			var data = _ref.data;
			var xAxis = _ref.xAxis;

			return { title: title, subTitle: subTitle, data: data, xAxis: xAxis };
		},
		merge: function merge() {
			var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

			var title = {
				text: options.title,
				subtext: options.subTitle
			};
			if (!options.title) {
				title.show = false;
			}
			var option = {
				title: title,
				tooltip: {
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
						shadowStyle: {
							color: 'rgba(220,220,220,.4)'
						}
					},
					formatter: function formatter(params) {
						var tar = params[0];
						return tar.name + ': ' + tar.value + '个媒体';
					}
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: {
					type: 'category',
					splitLine: {
						show: false
					},
					data: options.xAxis,
					splitArea: {
						show: true,
						interval: 0,
						areaStyle: {
							color: ['rgba(240, 240, 240, .3)', 'rgba(220, 220, 220, .3)']
						}
					}
				},
				yAxis: {
					type: 'value'
				},
				series: [{
					type: 'bar',
					barMaxWidth: 50,
					label: {
						normal: {
							show: true,
							position: 'insideBottom'
						}
					},
					data: options.data
				}]
			};
			if (this.props.color) option.color = this.props.color;

			return option;
		},
		componentDidMount: function componentDidMount() {
			this.$chart = echarts.init(this.refs.chart);
			this.$chart.setOption(this.merge(this.getProps(this.props.options)));
		},
		componentWillReceiveProps: function componentWillReceiveProps(nps) {
			if ('options' in nps) {
				var ops = this.merge(this.getProps(nps.options));
				this.$chart.setOption(ops);
			}
		},
		componentWillUnmount: function componentWillUnmount() {
			this.$chart && this.$chart.dispose();
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'spread-chart-container', style: { height: this.props.height } },
				React.createElement(
					'div',
					{ className: 'hd' },
					React.createElement(
						'span',
						{ className: 'tit' },
						this.props.title
					)
				),
				React.createElement(
					'div',
					{ className: 'bd' },
					React.createElement('div', { className: 'chart', ref: 'chart' })
				)
			);
		}
	});

	return Bar;
});
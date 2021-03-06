'use strict';

define(['mods'], function (mods) {
	var React = require('mods').ReactPack.default;

	var Table = React.createClass({
		displayName: 'Table',


		render: function render() {
			var _this = this;

			return React.createElement(
				'table',
				{ className: 'c-table' },
				React.createElement('colgroup', { width: '15%' }),
				React.createElement('colgroup', { width: '15%' }),
				React.createElement('colgroup', { width: '15%' }),
				React.createElement('colgroup', { width: '15%' }),
				React.createElement('colgroup', { width: '15%' }),
				React.createElement('colgroup', { width: '20%' }),
				React.createElement(
					'thead',
					null,
					React.createElement(
						'th',
						null,
						'序号'
					),
					React.createElement(
						'th',
						null,
						'手机号码'
					),
					React.createElement(
						'th',
						null,
						'姓名'
					),
					React.createElement(
						'th',
						null,
						'运营集团'
					),
					React.createElement(
						'th',
						null,
						'操作'
					)
				),
				React.createElement(
					'tbody',
					{ className: this.props.search_result_none && "none" },
					this.props.mdata.map(function (index, elem) {
						var userid = index.user_id;
						var tindex = index;
						return React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								null,
								elem + 1
							),
							React.createElement(
								'td',
								null,
								index.telephone
							),
							React.createElement(
								'td',
								null,
								index.user_name
							),
							React.createElement(
								'td',
								null,
								index.syndicate_name
							),
							React.createElement(
								'td',
								null,
								React.createElement('span', { className: 'iconfont icon-pencil', onClick: function onClick(e) {
										_this.props.edit(e, tindex);
									} }),
								React.createElement('span', { className: 'iconfont icon-lajitong ml30', onClick: function onClick(e) {
										_this.props.delete(e, userid);
									} })
							)
						);
					})
				)
			);
		}
	});

	return Table;
});
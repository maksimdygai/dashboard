const
	areaConfig = {
		chart: {
			backgroundColor: 'transparent',
			height: 250,
			renderTo: 'container',
			type: 'line'
		},

		title: {text: '', x: -20},
		subtitle: {text: '', x: -20},

		yAxis: {
			gridLineWidth: .2,
			min: 0,
			plotLines: [{value: 0, width: 1, color: '#808080'}],
			title: {text: ''}
		},

		credits: {enabled: false},
		exporting: {enabled: false},
		legend: {layout: 'horizontal', align: 'right', verticalAlign: 'bottom', borderWidth: 0}
	},

	donutConfig = {
		chart  : {backgroundColor: '#1A1A1A', height: 220},
		credits: {enabled: false},
		title  : {text: ''},
		tooltip: {pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'},

		plotOptions: {
			pie: {
				borderColor: 'transparent',
				dataLabels : {enabled: false}
			}
		},

		series: [{type: 'pie', innerSize: '60%'}]
	};

export {areaConfig, donutConfig};
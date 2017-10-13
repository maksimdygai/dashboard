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

	areaXAxis = {
		xAxis: {
			gridLineWidth: .5,
			gridLineDashStyle: 'shortDot',
			categories: ["30.05", "31.05", "01.06", "02.06", "03.06", "04.06", "05.06"]
		}
	},

	pieConfig = {
		chart: {
			backgroundColor: '#1A1A1A',
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie',
			height: 250
		},

		title: {text: ''},
		credits: {enabled: false},
		exporting: {enabled: false},
		tooltip: {pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'},

		plotOptions: {
			pie: {
				allowPointSelect: true,
				borderColor: '#212121',
				cursor: 'pointer',
				dataLabels: {enabled: false}
			}
		},

		series: [{
			colorByPoint: true,
			
			data: [
				{name: 'Агент', sliced: true},
				{name: 'Отдел', color: '#383838'}
			]
		}]
	};

export {areaConfig, areaXAxis, pieConfig};
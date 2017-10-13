import React from 'react';
import {Panel as BootstrapPanel, Col, Row} from 'react-bootstrap';
import HighchartBase from 'react-highcharts';
import {areaConfig, areaXAxis, pieConfig} from './graphconfig';

/// Test data
const
	getGraphData = () => ({
		series: [
			{
				color: '#2E9BDA',
				data: [1, 6, 0, 15, 14, 12, 9],

				fillColor: {
					linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
					stops: [[0, 'rgba(45, 153, 220, .4)'], [1, 'rgba(45, 153, 220, 0)']]
				},
				
				lineWidth: '1',
				marker   : {radius: 2, symbol: 'circle'},
				name     : 'Агент',
				type     : 'area'
			},
			
			{
				color: '#35BDA8',
				data: [2, 7, 3, 0, 19, 22, 8],

				fillColor: {
					linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
					stops: [[0, 'rgba(59, 189, 168, .2)'], [1, 'rgba(59, 189, 168, 0)']]
				},

				lineWidth: '1',
				marker   : {radius: 2, symbol: 'circle'},
				name     : 'Всего',
				type     : 'area'
			}
		]
	});
// END Test data

class PieGraph extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			area: areaConfig,
			pie : pieConfig
		}
	}

	componentWillMount() {
		this.setPeriod();
	}

	setPeriod = period => {
		const
			{area, pie} = this.state;

		this.setState({
			area: {...area, ...areaXAxis, ...getGraphData()},
			pie : _.merge(pie, {series: [{data: [{y: _.random(20)}, {y: _.random(50)}]}]})

		});
	}

	render() {
		const
			{area, pie} = this.state;

		return (
			<div>
				<h4>{this.props.header}</h4>

				<BootstrapPanel>
					<Row>
						<Col md={4}>
							<HighchartBase config={pie} />
						</Col>

						<Col md={8}>
							<HighchartBase config={area} />
						</Col>
					</Row>
				</BootstrapPanel>
			</div>
		);
	}
}

export default PieGraph;

import React from 'react';
import {connect} from 'react-redux';
import {Panel as BootstrapPanel, Col, Row} from 'react-bootstrap';
import HighchartBase from 'react-highcharts';
import {areaConfig, donutConfig} from './graphconfig';

class DonutGraph extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			area : areaConfig,
			donut: donutConfig
		}
	}

	componentWillMount() {
		this.setPeriod();
	}

	shouldComponentUpdate(nP) {
		return this.props !== nP;
	}

	setPeriod() {
		const
			{area, donut} = this.state,
			{donutAgentData, donutDepartmentData} = this.props;

		this.setState({
			area: {
				...area,

				...{
					series: [
						{
							color: '#2E9BDA',
							data: this.props.history_data.agent,

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
							data: this.props.history_data.department,

							fillColor: {
								linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
								stops: [[0, 'rgba(59, 189, 168, .2)'], [1, 'rgba(59, 189, 168, 0)']]
							},

							lineWidth: '1',
							marker   : {radius: 2, symbol: 'circle'},
							name     : 'Всего',
							type     : 'area'
						}
					],

					xAxis: {
						gridLineWidth: .5,
						gridLineDashStyle: 'shortDot',
						categories: this.props.dates_range
					}
				}
			},

			donut: {
				...donut, 
				
				...{
					series: [
						{
							data: [['Агент', donutAgentData], ['Отдел', donutDepartmentData]],
							name: this.props.header,
							type: 'pie',
							innerSize: '60%'
						}
					]
				}
			}
		});
	}

	render() {
		const
			{area, donut} = this.state;

		return (
			<div>
				<h4>{this.props.header}</h4>

				<BootstrapPanel>
					<Row>
						<Col md={4}>
							<HighchartBase config={donut} />
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

export default connect(state => ({
	dates_range : state.dates_range,
	history_data: state.history_data
}))(DonutGraph);

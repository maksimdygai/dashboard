import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Panel as BootstrapPanel, Button, ButtonGroup, Col, Row} from 'react-bootstrap';
import SummaryBox from '../common/SummaryBox';
import {numberToTime} from '../../common/helpers';
import fixtures from '../../common/fixtures';

class Calls extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		const
			agent = this.props.overall_data.agent || {},
			company = this.props.overall_data.company || {},
			department = this.props.overall_data.department || {};

		return (
			<div>
				<h4>Звонки</h4>

				<Row>
					<Col md={3} sm={4} xs={6}>
						<SummaryBox
							title='Количество'
							value={`${agent.calls}/${department.calls}/${company.calls}`}
							color='success'
						/>
					</Col>

					<Col md={3} sm={4} xs={6}>
						<SummaryBox
							title='Новым лидам'
							value={`${agent.calls_to_new_leads}/${department.calls_to_new_leads}/${company.calls_to_new_leads}`}
							color='success'
						/>
					</Col>

					<Col md={3} sm={4} xs={6}>
						<SummaryBox
							title='Старым лидам'
							value={`${agent.calls_to_old_leads}/${department.calls_to_old_leads}/${company.calls_to_old_leads}`}
							color='success'
						/>
					</Col>

					<Col md={3} sm={4} xs={6}>
						<SummaryBox
							title='Дозвоны'
							value={`${agent.call_ups}/${department.call_ups}/${company.call_ups}`}
							color='success'
						/>
					</Col>

					<Col md={5} sm={5} xs={6}>
						<SummaryBox
							title='Продолжительность'
							value={`${numberToTime(agent.call_overall_length)}/${numberToTime(department.call_overall_length)}/${numberToTime(company.call_overall_length)}`}
							color='success'
						/>
					</Col>

					<Col md={3} sm={4} xs={6}>
						<SummaryBox
							title='Средняя продолжительность'
							value={`${numberToTime(agent.call_average_length)}/${numberToTime(department.call_average_length)}/${numberToTime(company.call_average_length)}`}
							color='success'
						/>
					</Col>

					<Col md={3} sm={4} xs={6}>
						<SummaryBox
							title='Просроченные звонки'
							value={`${agent.overdue_calls}/${department.overdue_calls}/${company.overdue_calls}`}
							color='danger'
						/>
					</Col>
				</Row>
			</div>
		);
	}
}

export default connect(state => ({
	data        : state.data,
	overall_data: state.overall_data
}))(Calls);

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Panel as BootstrapPanel, Button, ButtonGroup, Col, Row} from 'react-bootstrap';
import SummaryBox from '../common/SummaryBox';
import fixtures from '../../common/fixtures';

class Statuses extends React.Component {
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
				<h4>Статусы</h4>

				<Row>
					<Col md={4} sm={4} xs={6}>
						<SummaryBox
							title='Переходов вверх по воронке'
							value={`${agent.transitions_up_funnel}/${department.transitions_up_funnel}/${company.transitions_up_funnel}`}
							color='success'
						/>
					</Col>

					<Col md={4} sm={4} xs={6}>
						<SummaryBox
							title='Звонков без смены статуса'
							value={`${agent.calls_with_no_status_change}/${department.calls_with_no_status_change}/${company.calls_with_no_status_change}`}
							color='success'
						/>
					</Col>

					<Col md={4} sm={4} xs={6}>
						<SummaryBox
							title='Закрыты и нереализованны'
							value={`${agent.closed_failed}/${department.closed_failed}/${company.closed_failed}`}
							color='danger'
						/>
					</Col>

					<Col md={3} sm={4} xs={6}>
						<SummaryBox
							title='Еще не дозвонился'
							value={`${agent.not_answered}/${department.not_answered}/${company.not_answered}`}
							color='success'
						/>
					</Col>

					<Col md={3} sm={4} xs={6}>
						<SummaryBox
							title='Не целевой'
							value={`${agent.non_target}/${department.non_target}/${company.non_target}`}
							color='warning'
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
}))(Statuses);

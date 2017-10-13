import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Panel as BootstrapPanel, Button, ButtonGroup, Col, Row} from 'react-bootstrap';
import SummaryBox from '../common/SummaryBox';
import fixtures from '../../common/fixtures';

class Tasks extends React.Component {
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
				<h4>Задачи</h4>

				<Row>
					<Col md={3} sm={4} xs={6}>
						<SummaryBox
							title='Запланированных (старым лидам)'
							value={`${agent.planned_to_old_leads}/${department.planned_to_old_leads}/${company.planned_to_old_leads}`}
							color='success'
						/>
					</Col>

					<Col md={3} sm={4} xs={6}>
						<SummaryBox
							title='Запланированных (еще не дозвонился)'
							value={`${agent.planned_not_answered}/${department.planned_not_answered}/${company.planned_not_answered}`}
							color='success'
						/>
					</Col>

					<Col md={3} sm={4} xs={6}>
						<SummaryBox
							title='Просроченных (старым лидам)'
							value={`${agent.overdue_to_old_leads}/${department.overdue_to_old_leads}/${company.overdue_to_old_leads}`}
							color='danger'
						/>
					</Col>

					<Col md={3} sm={4} xs={6}>
						<SummaryBox
							title='Просроченных (еще не дозвонился)'
							value={`${agent.overdue_not_answered}/${department.overdue_not_answered}/${company.overdue_not_answered}`}
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
}))(Tasks);

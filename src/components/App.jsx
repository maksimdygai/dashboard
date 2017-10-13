import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Tabs from './common/Tabs';
import {Col, Jumbotron, Row, Tab} from 'react-bootstrap';
import DonutGraph from './common/DonutGraph';
import PieGraph from './common/PieGraph';
import SearchBar from './SearchBar';
import Calls from './Calls';
import Statuses from './Statuses';
import Tasks from './Tasks';
import fixtures from '../common/fixtures';

const
	data = fixtures.data;

export default withRouter(connect(state => ({
	history_data: state.history_data,
	overall_data: state.overall_data
}))(({history_data, overall_data}) =>
	<div className="main-wrap">
		<div className="navigation">
			<SearchBar />
		</div>

		<div className="content">
			<Tabs defaultActiveKey={1} id="main-tabs">
				<Tab eventKey={1} title="Основное">
					{!_.isEmpty(history_data)
						? <div className='container-fluid'>
							<Calls />
							<Statuses />
							<Tasks />
						</div>

						: <Row>
							<Col md={12}>
								<div className='container-fluid'>
									<p></p>

									<Jumbotron>
										<p>Чтобы получить данные, выберите агента и период</p>
									</Jumbotron>
								</div>
							</Col>
						</Row>
					}
				</Tab>

				<Tab eventKey={2} title="Звонки">
					{!_.isEmpty(history_data)
						? <div className='container-fluid'>
							<Row>
								<Col md={6} sm={12}>
									<DonutGraph
										header="Количество"
										donutAgentData={overall_data.agent.calls}
										donutDepartmentData={overall_data.department.calls}
									/>
								</Col>

								<Col md={6} sm={12}>
									<DonutGraph
										header="Продолжительность"
										donutAgentData={overall_data.agent.call_overall_length}
										donutDepartmentData={overall_data.department.call_overall_length}
									/>
								</Col>
							</Row>

							<Row>
								<Col md={6} sm={12}>
									<DonutGraph
										header="Средняя продолжительность"
										donutAgentData={overall_data.agent.call_average_length}
										donutDepartmentData={overall_data.department.call_average_length}
									/>
								</Col>

								<Col md={6} sm={12}>
									<DonutGraph
										header="Дозвоны"
										donutAgentData={overall_data.agent.call_ups}
										donutDepartmentData={overall_data.department.call_ups}
									/>
								</Col>
							</Row>

							<Row>
								<Col md={6} sm={12}>
									<DonutGraph
										header="Просроченные звонки"
										donutAgentData={overall_data.agent.overdue_calls}
										donutDepartmentData={overall_data.department.overdue_calls}
									/>
								</Col>
							</Row>
						</div>

						: <Row>
							<Col md={12}>
								<div className='container-fluid'>
									<p></p>

									<Jumbotron>
										<p>Чтобы получить данные по звонкам, выберите агента и период</p>
									</Jumbotron>
								</div>
							</Col>
						</Row>
					}
				</Tab>

				<Tab eventKey={3} title="Статусы">
					{!_.isEmpty(history_data)
						? <div className='container-fluid'>
							<Row>
								<Col md={6} sm={12}>
									<DonutGraph
										header="Переходов вверх по воронке"
										donutAgentData={overall_data.agent.transitions_up_funnel}
										donutDepartmentData={overall_data.department.transitions_up_funnel}
									/>
								</Col>

								<Col md={6} sm={12}>
									<DonutGraph
										header="Звонков без смены статуса"
										donutAgentData={overall_data.agent.calls_with_no_status_change}
										donutDepartmentData={overall_data.department.calls_with_no_status_change}
									/>
								</Col>
							</Row>

							<Row>
								<Col md={6} sm={12}>
									<DonutGraph
										header="Закрыты и нереализованны"
										donutAgentData={overall_data.agent.closed_failed}
										donutDepartmentData={overall_data.department.closed_failed}
									/>
								</Col>

								<Col md={6} sm={12}>
									<DonutGraph
										header="Еще не дозвонился"
										donutAgentData={overall_data.agent.not_answered}
										donutDepartmentData={overall_data.department.not_answered}
									/>
								</Col>
							</Row>

							<Row>
								<Col md={6} sm={12}>
									<DonutGraph
										header="Не целевой"
										donutAgentData={overall_data.agent.non_target}
										donutDepartmentData={overall_data.department.non_target}
									/>
								</Col>
							</Row>
						</div>

						: <Row>
							<Col md={12}>
								<div className='container-fluid'>
									<p></p>
									
									<Jumbotron>
										<p>Чтобы получить данные по статусам, выберите агента и период</p>
									</Jumbotron>
								</div>
							</Col>
						</Row>
					}
				</Tab>
			
				<Tab eventKey={4} title="Задачи">
					{!_.isEmpty(history_data)
						? <div className='container-fluid'>
							<Row>
								<Col md={6} sm={12}>
									<DonutGraph
										header="Запланированных (старым лидам)"
										donutAgentData={overall_data.agent.planned_to_old_leads}
										donutDepartmentData={overall_data.department.planned_to_old_leads}
									/>
								</Col>

								<Col md={6} sm={12}>
									<DonutGraph
										header="Запланированных (еще не дозвонился)"
										donutAgentData={overall_data.agent.planned_not_answered}
										donutDepartmentData={overall_data.department.planned_not_answered}
									/>
								</Col>
							</Row>

							<Row>
								<Col md={6} sm={12}>
									<DonutGraph
										header="Просроченных (старым лидам)"
										donutAgentData={overall_data.agent.overdue_to_old_leads}
										donutDepartmentData={overall_data.department.overdue_to_old_leads}
									/>
								</Col>

								<Col md={6} sm={12}>
									<DonutGraph
										header="Просроченных (еще не дозвонился)"
										donutAgentData={overall_data.agent.overdue_not_answered}
										donutDepartmentData={overall_data.department.overdue_not_answered}
									/>
								</Col>
							</Row>
						</div>

						: <Row>
							<Col md={12}>
								<div className='container-fluid'>
									<p></p>
									
									<Jumbotron>
										<p>Чтобы получить данные по задачам, выберите агента и период</p>
									</Jumbotron>
								</div>
							</Col>
						</Row>
					}
				</Tab>
			</Tabs>
		</div>
	</div>
));

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Col, Row} from 'react-bootstrap';
import {DAY_MONTH_YEAR_FORMAT} from '../../common/app-const';
import Autocomplete from '../common/Autocomplete/';
import DateRangePicker from 'react-bootstrap-daterangepicker';

import {
	setData,
	setDatesRange,
	setEndDate,
	setHistoryData,
	setOverallData,
	setStartDate
} from '../../redux/actions/action-creators';

class SearchBar extends React.Component {
	constructor() {
		super();
	}

	// Test
	componentWillMount() {
		/*
		this.props.setData();
		*/

		this.onSetPeriod(moment().subtract(6, 'days'), moment());
	}
	// End test

	onSetPeriod = (sd, ed) => {
		let
			range = [],
			currentDate = sd.toDate();

		while(currentDate <= ed.toDate()) {
			range.push(moment(currentDate).format('DD.MM'));
			currentDate = moment(currentDate).add(1, 'days').toDate();
		}

		this.props.setDatesRange(range);
		this.props.setStartDate(moment(sd).startOf('day').format("X"));
		this.props.setEndDate(moment(ed).startOf('day').format("X"));
	}

	onRequestData = () => {
		const
			{agent, endDate, startDate} = this.props;

		this.props.setHistoryData({
			agent:  _.sample([
				[1, 6, 0, 15, 14, 12, 32],
				[3, 3, 7, 12, 17, 9, 29],
				[4, 3, 7, 18, 11, 15, 26]
			]),

			department:  _.sample([
				[4, 24, 5, 60, 51, 46, 119],
				[11, 13, 27, 45, 72, 33, 116],
				[16, 11, 23, 71, 43, 60, 83]
			])
		});

		this.props.setOverallData({
		    end      : endDate,
		    managerid: agent.id,
		    start    : startDate
		});
	}

	render() {
		const
			{agent, endDate, startDate} = this.props,
			endDateObj = moment.unix(endDate),
			startDateObj = moment.unix(startDate);

		return (
			<form className="form-inline">
				<div className="navbar-form-container">
					<Row>
						<Col md={5} sm={6} xs={12}>
							<Autocomplete />
						</Col>

						<Col md={3} sm={6} xs={12}>
							<div className="form-group">
								<label className="m-r-1 control-label">Период</label>
								
								<DateRangePicker
									endDate={endDate ? endDateObj : moment()}
									startDate={startDate ? startDateObj : moment().subtract(1, 'months')}
									autoApply={true}
									onApply={(e, picker) => this.onSetPeriod(picker.startDate, picker.endDate)}
								>
									<p className='btn btn-link'>
										{endDate ? `${startDateObj.format(DAY_MONTH_YEAR_FORMAT)} - ${endDateObj.format(DAY_MONTH_YEAR_FORMAT)}` : 'Выберите период'}
									</p>
								</DateRangePicker>
							</div>
						</Col>

						<Col md={4} sm={6} xs={12}>
							<Button
								bsStyle="primary"
								className='btn-outline'
								disabled={!(!_.isEmpty(agent) && endDate && startDate)}

								onClick={() => this.onRequestData()}
							>
								Отправить
							</Button>
						</Col>
					</Row>
				</div>
			</form>
		)
	}
}

export default connect(
	state => ({
		endDate  : state.endDate,
		startDate: state.startDate,
		agent    : state.activeUser
	}),

	dispatch => ({
		/*
		sendCriteria: bindActionCreators(sendCriteria, dispatch),
		*/
		setData       : bindActionCreators(setData, dispatch),
		setDatesRange : bindActionCreators(setDatesRange, dispatch),
		setEndDate    : bindActionCreators(setEndDate, dispatch),
		setHistoryData: bindActionCreators(setHistoryData, dispatch),
		setOverallData: bindActionCreators(setOverallData, dispatch),
		setStartDate  : bindActionCreators(setStartDate, dispatch)
	})
)(SearchBar);

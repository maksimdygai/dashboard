import {combineReducers} from 'redux';
import {activeUser, data, dates_range, endDate, history_data, overall_data, startDate} from './reducers';

export default (state, action) => combineReducers({
	activeUser,
	data,
	dates_range,
	endDate,
	history_data,
	overall_data,
	startDate
})(state, action);

import {INITIAL_STATE} from '../../common/app-const';

import {
	SET_ACTIVE_USER,
	SET_DATA,
	SET_DATES_RANGE,
	SET_END_DATE,
	SET_HISTORY_DATA,
	SET_OVERALL_DATA,
	SET_START_DATE
} from '../actions/types';

export const activeUser = (state = INITIAL_STATE.activeUser, action) => {
	switch(action.type) {
		case SET_ACTIVE_USER:
			return action.data;
		default:
			return state;
	}
};

export const data = (state = INITIAL_STATE.data, action) => {
	switch(action.type) {
		case SET_DATA:
			return action.data;
		default:
			return state;
	}
};

export const dates_range = (state = INITIAL_STATE.dates_range, action) => {
	switch(action.type) {
		case SET_DATES_RANGE:
			return action.data;
		default:
			return state;
	}
};

export const endDate = (state = INITIAL_STATE.endDate, action) => {
	switch(action.type) {
		case SET_END_DATE:
			return action.data;
		default:
			return state;
	}
};

export const history_data = (state = INITIAL_STATE.history_data, action) => {
	switch(action.type) {
		case SET_HISTORY_DATA:
			return action.data;
		default:
			return state;
	}
};

export const overall_data = (state = INITIAL_STATE.overall_data, action) => {
	switch(action.type) {
		case SET_OVERALL_DATA:
			return action.data;
		default:
			return state;
	}
};

export const startDate = (state = INITIAL_STATE.startDate, action) => {
	switch(action.type) {
		case SET_START_DATE:
			return action.data;
		default:
			return state;
	}
};


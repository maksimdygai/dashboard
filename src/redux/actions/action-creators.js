import fetch from 'isomorphic-fetch';

import {
    SET_ACTIVE_USER,
    SET_DATA,
    SET_DATES_RANGE,
    SET_END_DATE,
    SET_HISTORY_DATA,
    SET_OVERALL_DATA,
    SET_START_DATE
} from './types';

/*
export const sendCriteria  = data => console.warn(data);
*/
export const setActiveUser  = data => ({type: SET_ACTIVE_USER, data});
export const setDatesRange  = data => ({type: SET_DATES_RANGE, data});
export const setEndDate     = data => ({type: SET_END_DATE, data});
export const setHistoryData = data => ({type: SET_HISTORY_DATA, data});

export const setOverallData = data => dispatch => fetch(`http://94.250.249.166/admin/dash/full/get-data?managerid=${data.managerid}&organizationid=2&start=${data.start}&end=${data.end}`)
    .then(response => response.json())
    .then(json => dispatch({type: SET_OVERALL_DATA, data: json}));

export const setData = () => dispatch => fetch(`http://localhost:3000/data`)
    .then(response => response.json())
    .then(json => dispatch({type: SET_DATA, data: json}));

export const setStartDate = data => ({type: SET_START_DATE, data});

export function makeActionCreator(type, ...keys) {
    if(!type) throw new Error('Type cannot be null/undefined');

    return (...args) => {
        let
        	action = {type};

        keys.forEach((arg, index) => {action[keys[index]] = args[index]});

        return action;
    };
}

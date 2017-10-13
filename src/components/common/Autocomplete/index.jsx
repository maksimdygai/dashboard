import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Select from 'react-select';
import fetch from 'isomorphic-fetch';
import {Row, Col} from 'react-bootstrap';
import {setActiveUser} from '../../../redux/actions/action-creators';
import fixtures from '../../../common/fixtures';

class Autocomplete extends React.Component {
	constructor() {
		super();

		this.state = {
			backspaceRemoves: true,
			multi: false,
			value: null
		};
	}

	getUsers(input) {
		if(!input)
			return Promise.resolve({options: []});

		return fetch(`http://dashboard.clever-solutions.ru/admin/dash/getmanager?name=${input}&organizationid=3`)
			.then(response => response.json())
			.then(json => ({options: json}));

		/*
		return Promise.resolve({options: fixtures.items});
		*/
	}

	onChange = value => {
		this.props.setActiveUser(value);
	}

	render() {
		const
			{user} = this.props;

		return (
			<div className="form-group">
				<label className="m-r-1 control-label">Агент</label>
			
				<Select.Async
					{...(_.pick(this.state, ['multi', 'value', 'backspaceRemoves']))}
					labelKey="name"
					loadOptions={input => this.getUsers(input)}
					onChange={val => this.onChange(val)}
					onValueClick={(val, e) => this.gotoUser(val, e)}
					placeholder={user ? user.name : 'Выберите агента'}
					valueKey="id"
				/>
			</div>
		)
	}
}

export default connect(
	state => ({user: state.activeUser}),
	dispatch => ({setActiveUser: bindActionCreators(setActiveUser, dispatch)})
)(Autocomplete);

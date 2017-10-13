import React from 'react';
import {Tabs as BootstrapTabs} from 'react-bootstrap';

const Tabs = ({children, id}) =>
	<BootstrapTabs id={id}>
		{children}
	</BootstrapTabs>

export default Tabs;

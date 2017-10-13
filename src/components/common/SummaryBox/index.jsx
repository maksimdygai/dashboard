import React from 'react';
import {Panel, Col, Row} from 'react-bootstrap';

const SummaryBox = ({color, footer, icon, title, unit, value}) => (
	<Panel
		type='color-border-full'
		bsStyle={color}
		footer={footer}
		className='summaryBox'
	>
		<Row>
			{icon && <Col xs={3}>
				{icon}
			</Col>}

			<Col xs={icon ? 9 : 12} className='text-right'>
				<p className='m-b-0'>
					{title}
				</p>

				<p className='value'>
					{value}
					{unit && (<small className='text-white'>{` ${unit}`}</small>)}
				</p>
			</Col>
		</Row>
	</Panel>
);

export default SummaryBox;

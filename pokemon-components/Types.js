import React from 'react';
import { CustomText } from '../generic-components/CustomText';

export const Types = ({ types }) => {
	return (
		<React.Fragment>
			{types.map((item, key) => {
				const { type } = item;
				return <CustomText label={`Type #${key + 1}:`} text={type.name} />;
			})}
		</React.Fragment>
	);
};
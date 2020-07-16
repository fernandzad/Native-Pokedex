import React from 'react';
import { CustomText } from '../generic-components/CustomText';

export const Abilities = ({ abilities }) => {
	return (
		<React.Fragment>
			{abilities.map((item, key) => {
				const { ability } = item;
				return <CustomText label={`Ability #${key + 1}:`} text={ability.name} />;
			})}
		</React.Fragment>
	);
};
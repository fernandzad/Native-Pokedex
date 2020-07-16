import React from 'react';
import { Text, View } from 'react-native';
import { customTextStyles } from '../styles/CustomText.style';

export const CustomText = ({ label, text }) => (
	<View>
		<Text style={customTextStyles.whiteText}>
			{label}
			<Text style={customTextStyles.boldWhiteText}> {`${text} `}</Text>
		</Text>
	</View>
);
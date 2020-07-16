import React from 'react';
import { View, Text } from 'react-native';
import { stylesStats } from '../styles/Stats.style';

const tableHead = ['Hp', 'Attack', 'Defense', 'Sp. Attack', 'Sp. Defense', 'Speed'];

const Stats = ({ stats }) => {

	return (
		<View style={stylesStats.inlineContainer}>
			{stats.map((item, key) => {
        const { stat } = item;
        return (
          <Text key={key} style={stylesStats.whiteText}>
            {`${stat.name}: `}<Text style={stylesStats.boldWhiteText}>{item.base_stat}</Text>
          </Text>
        );
      })}
		</View>
	);
};

export default Stats;

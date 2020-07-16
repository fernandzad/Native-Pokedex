import { StyleSheet } from 'react-native';

export const stylesList = StyleSheet.create({
	title: {
		fontSize: 22,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	button: {
		marginRight: 80,
		marginLeft: 80,
		marginTop: 10,
		marginBottom: 10,
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: '#68a0cf',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#fff',
	},
	inlineContainer: {
		alignItems: 'center',
		paddingTop: 30,
	},
	logoContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		width: 300,
		height: 400,
	},
});

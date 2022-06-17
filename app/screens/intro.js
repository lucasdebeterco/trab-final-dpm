import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, {useSate, useState} from 'react'
import { StatusBar, TextInput } from 'react-native-web'
import colors from '../misc/colors';
import RoundIconBtn from '../components/RoundIconBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function intro({onFinish}) {
	const [name, setName] = useState('')
	const handleOnChangeText = (text) => setName(text);

	const handleSubmit = async () => {
		const user = { name: name}
		await AsyncStorage.setItem('user', JSON.stringify(user))

		if (onFinish) onFinish();
	}

	return (
		<View style={styles.container}>
			<Text style={styles.inputTitle}>Insira seu nome</Text>
			<TextInput value={name} onChangeText={handleOnChangeText} placeholder='Digite seu nome' style={styles.textInput}/>

			{ name.length >= 3 ? (
				<RoundIconBtn antIconName='arrowright' onPress={handleSubmit} />
			) : '' }
		</View>
	);
};

const width = Dimensions.get('window').width - 50;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textInput: {
		borderWidth: 2,
		borderColor: colors.PRIMARY,
		color: colors.PRIMARY,
		width,
		height: 50,
		borderRadius: 10,
		paddingLeft: 15,
		fontSize: 25,
		marginBottom: 15
	},
	inputTitle: {
		alignSelf: 'flex-start',
		paddingLeft: 25,
		marginBottom: 5,
		opacity: 0.5
	}
})
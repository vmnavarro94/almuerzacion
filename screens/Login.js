import React from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import { useForm } from '../hooks'

export default ({ navigation }) => {
	const initialState = {
		email: '',
		password: '',
	}
	const onSubmit = values => {
		console.log(values)
	}
	const { suscribe, inputs, handleSubmit } = useForm(initialState, onSubmit)
	return (
		<View style={styles.container}>
			<Text style={styles.title} >Iniciar Sesion</Text>
			<TextInput 
				value={inputs.email} 
				onChangeText={suscribe('email')} 
				placeholder='E-mail' 
				style={styles.input} 
			/>
			<TextInput 
				value={inputs.password} 
				onChangeText={suscribe('password')} 
				placeholder='Contraseña' 
				style={styles.input} 
				secureTextEntry={true}
			/>	
			<Button title='Iniciar Sesion' onPress={handleSubmit} />
			<Button title='Registrarse' onPress={() => navigation.navigate('Register')} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 15
	},
	input: {
		height: 40,
		alignSelf: 'stretch',
		borderColor: '#eee',
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 5,
	},
	title: {
		fontSize: 24,
		marginBottom: 16,
	},
})


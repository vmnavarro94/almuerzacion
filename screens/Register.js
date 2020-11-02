import React from 'react'
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native'
import { useForm } from '../hooks'

export default ({ navigation }) => {
	const initialState = {
		email: '',
		password: '',
	}
	const onSubmit = async (values) => {
		const response = await fetch('https://serverless.vnavarro.vercel.app/api/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/json',
			},
			body: JSON.stringify(values),
		})
		const text = await response.text()
		if (text === 'Usuario creado con exito') {
			return Alert.alert(
				'Exito',
				text,
				[
					{ text: 'Ir al inicio', onPress: () => navigation.navigate('Login') }
				]
			)
		}
		Alert.alert('Error', text)
	}
	const { suscribe, handleSubmit, inputs } = useForm(initialState, onSubmit)
	return (
		<View style={styles.container}>
			<Text style={styles.title} >Registro</Text>
			<TextInput 
				autoCapitalize='none'
				value={inputs.email} 
				onChangeText={suscribe('email')} 
				placeholder='E-mail' 
				style={styles.input} 
			/>
			<TextInput 
				value={inputs.password} 
				autoCapitalize='none'
				onChangeText={suscribe('password')} 
				placeholder='Contraseña' 
				style={styles.input} 
				secureTextEntry={true}
			/>
			<Button title='Enviar' onPress={handleSubmit} />
			<Button title='Volver al inicio' onPress={() => navigation.navigate('Login')} />
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


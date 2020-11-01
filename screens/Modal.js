import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useFetch } from '../hooks'

export default ({ navigation }) => {
	const id = navigation.getParam('_id')
	const { loading, data } = useFetch(`https://serverless.vnavarro.vercel.app/api/meals/${id}`)
	return(	
		<View style={styles.container}>
			{ loading ? <Text>Cargando...</Text> :
				<>	
					<Text>{data._id}</Text>
					<Text>{data.name}</Text>
					<Text>{data.desc}</Text>
				</>
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})


import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList  } from 'react-native'
import { ListItem } from '../components'
import { useFetch } from '../hooks'

const Meals = ({ navigation }) => {
	const { loading, data: meals } = useFetch('https://serverless.vnavarro.vercel.app/api/meals');	

	return(
		<View>
			{ 
				loading
					?
						<Text>Cargando...</Text>
					:
						<FlatList 
							style={styles.list}
							data={meals}
							keyExtractor={meal => meal._id}
							renderItem={ ({ item }) => 
									<ListItem
										onPress={() => navigation.navigate('Modal', { _id: item._id })}
										name={item.name}
									/>}
						/>
			}	
		</View>
	)
}

Meals.navigationOptions = () => ({
	title: 'Comidas disponibles'
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	list: {
		alignSelf: 'stretch',
	},
})

export default Meals


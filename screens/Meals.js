import React from 'react'
import { View, Text, StyleSheet, FlatList  } from 'react-native'
import {ListItem} from '../components'

const data = [
	{ _id: 'lala', name: 'Quesadillas', desc: 'Frita, sencilla con salsa al gusto' },
	{ _id: 'lele', name: 'Taco de rajas', desc: 'Con queso y salsa al gusto' },
	{ _id: 'lolo', name: 'Gordita', desc: 'De frijoles, queso, carne o papa' },
]

const Meals = ({ navigation }) => {
	return(
		<View>
			<FlatList 
				style={styles.list}
				data={data}
				keyExtractor={meal => meal._id}
				renderItem={ ({ item }) => 
						<ListItem
							onPress={() => navigation.navigate('Modal', { _id: item._id })}
							name={item.name}
						/> }
			/>
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


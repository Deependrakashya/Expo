import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

export default function dynamicGrid() {

	const data = [
		{
			id:1,
			name:'deep',
			password:123
		},
		{
			id:2,
			name:'deependra',
			password:1234
		},
		{
			id:3,
			name:'seeku',
			password:12387756
		},
		{
			id:4,
			name:'seeku',
			password:12387756
		},
		{
			id:5,
			name:'seeku',
			password:12387756
		},
		{
			id:6,
			name:'seeku',
			password:12387756
		},
		{
			id:7,
			name:'seeku',
			password:12387756
		},
		{
			id:8,
			name:'seeku',
			password:12387756
		}
	]
  return (
	<View style={{backgroundColor:'yellow'}}>
	  <Text>dynamicGrid</Text>
   <ScrollView>
	<View style ={{flex:1,flexWrap:'wrap', flexDirection:'row',justifyContent:'center'}}>

    {data.map((item, key)=>(
		<View style={styles.text} key={item.id}><Text style={{fontSize:20}}>{item.name} </Text>
		<Text style={{fontSize:20}}>{item.password}</Text>
		</View>
	))}
 
	</View>
	</ScrollView>
	</View>
  )
}

const styles = StyleSheet.create({
	text:{
		margin:3,
		fontSize:25,
		backgroundColor:'pink',
		padding:50,
		textAlign:'center ',
		borderRadius:10,
	
	}
})
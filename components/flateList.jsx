import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'

export default function flateList() {
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
	<View>
	  <Text style={{fontSize:20}}>flateList</Text>
	  <FlatList 
	    data={data}// array
		horizontal
		renderItem={({item})=> <Userdata item={item}/>
	
  }/>
	</View>
  )
}
const Userdata =(props)=>{
	const item=props.item;
	return(

		<View style={styles.text}>
		<Text style={{fontSize:25}}>  {item.id} </Text>
		<Text>  {item.name} </Text>
		<Text>  {item.password} </Text>
	</View>
	)
}

const styles = StyleSheet.create({
	text:{
		margin:4,
		backgroundColor:'pink',
		padding:50,
		textAlign:'center ',
		borderRadius:10,
	
	}
})
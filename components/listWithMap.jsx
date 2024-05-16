import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlateList() {
	const data = [
		{
			id:1,
			name:'deep',
			password:123
		},
		{
			id:2,
			name:'dk',
			password:1234
		},
		{
			id:3,
			name:'seeku',
			password:12387756
		}
	]
	
  return (
	<View>
	  <Text>FlateList</Text>
	  {
		data.map((item,key) =>(
		<Text key={item.id}>{item.id} {item.name}</Text>
	 
		
	 ))
	  }
	</View>
  )
}

const styles = StyleSheet.create({})
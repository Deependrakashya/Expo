import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../components/Input'
import DynamicGrid from '../components/dynamicGrid'
import List from '../components/listWithMap'
import FlateList from '../components/flateList'
export default function index() {
	
	
  return (
	<View>
	  {/* <Input></Input> */}
	 {/* <FlateList></FlateList> */}
	   {/* <DynamicGrid></DynamicGrid> */}
	   <FlateList></FlateList>
	</View>
  )
}

const styles = StyleSheet.create({})
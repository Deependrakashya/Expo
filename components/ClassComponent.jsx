
import React, { Component } from 'react'
import { Text,View,Button} from 'react-native'


export class ClassComponent extends Component {
	
	click =()=>console.warn("button clicked")
  render() {
	return (
		<View>

	   <Text>This is class Component</Text>
	   <Button title='click me' onPress={this.click}/>
		</View>
	)
  }
}

export default ClassComponent

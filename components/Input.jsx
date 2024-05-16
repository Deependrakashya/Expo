import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React, { useState } from 'react'

export default function Input() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [display, setdisplay] = useState(false)
  return (
	<View>
	  <Text>input form</Text>
	  <TextInput
	  style={styles.input}
	  placeholder='enter your name'
	  onChangeText={(text)=>setname(text)}
	  />
	  <TextInput
	  style={styles.input}
	  placeholder='enter your email'
	    onChangeText={(text)=>setemail(text)}
	  /><TextInput
	  style={styles.input}
	  placeholder='enter your password'
	  secureTextEntry={true}
	  onChangeText={(text)=>setpassword(text)}
	  />
	  <View style={{margin:10}}>
	  <Button  title='show text'
	    onPress={()=>setdisplay(true)}/>

	  </View>	 
	   <View style={{margin:10}}>
	  <Button title='hide text text'
	     onPress={()=>setdisplay(false)}
	  />	

	  </View>
	  {
		display?<View>
			<Text>name is {name}</Text>
			<Text>email is {email}</Text>
			<Text>password is {password}</Text>
			
		</View>:null
	  }
	    

	</View>
  )
}

const styles = StyleSheet.create({
	input:{
		borderWidth:1,
		width:'90%',
		margin:4,
		padding:5
	}
})
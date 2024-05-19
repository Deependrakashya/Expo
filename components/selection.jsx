import React from 'react'
import { StyleSheet, Text, View, SectionList } from 'react-native'

export default function Selection() {
  const data = [
    {
      title: 'deep',
      data: ["cpp", "java", "js", ".net"]
    },
    {
      title: 'deependra',
      data: ["cpp", "java", "js", ".net"]
    },
    {
      title: 'seeku',
      data: ["cpp", "java", "js", ".net"]
    },
    {
      title: 'seeku',
      data: ["cpp", "java", "js", ".net"]
    },
    {
      title: 'seeku',
      data: ["cpp", "java", "js", ".net"]
    },
    {
      title: 'seeku',
      data: ["cpp", "java", "js", ".net"]
    },
    {
      title: 'seeku',
      data: ["cpp", "java", "js", ".net"]
    },
    {
      title: 'seeku',
      data: ["cpp", "java", "js", ".net"]
    }
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selection</Text>
      <SectionList
        sections={data}
       
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f4f4f4',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  item: {
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10
  }
})

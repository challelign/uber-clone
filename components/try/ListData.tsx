import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ListData = () => {
    const fruits = ["apple","banana","orange","water lemeon"]
  return (
    <View>
      <Text>ListData</Text>
      <FlatList 
       data={fruits} 
       keyExtractor={(item) =>item}
      renderItem={({item}) =>{
        return <Text>
            
            {item}
        </Text>
      }}/>
    </View>
  )
}

export default ListData
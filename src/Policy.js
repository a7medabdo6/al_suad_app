import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import COLORS from './consts/colors'

const Policy = () => {
  return (
    <ScrollView style={{flex:1}}>
    <View style={{flex:1,backgroundColor:COLORS.backgroundblue}}>
    <View style={{backgroundColor:"white",marginHorizontal:15,marginTop:10}} >
      <View style={{marginTop:40,marginHorizontal:15}} >
        <Text style={{color:COLORS.red,fontSize:17}} > Lorem Ipsum is simply dummy text of the printing  </Text>
        <Text style={{marginTop:10}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </View>
      
      <View style={{marginTop:40,marginHorizontal:15}} >
        <Text style={{color:COLORS.red,fontSize:17}} > Lorem Ipsum is simply dummy text of the printing  </Text>
        <Text style={{marginTop:10}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </View>

    
      <View style={{marginTop:40,marginHorizontal:15}} >
        <Text style={{color:COLORS.red,fontSize:17}} > Lorem Ipsum is simply dummy text of the printing  </Text>
        <Text style={{marginTop:10}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </View>
    

     

      </View>
    </View>
    </ScrollView>
  )
}

export default Policy
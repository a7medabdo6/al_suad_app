import { View, Text } from 'react-native'
import React from 'react'

const SettingCard = ({Header,FirstRow,SecondRow,ThiredRow,ForthRow}) => {
  return (
    <View style={{display:"flex",flexDirection:"column",padding:10,margin:20,backgroundColor:"white"}}>
      {Header}
        {FirstRow}
      {SecondRow}
      {ThiredRow}
      {ForthRow}
    </View>
  )
}

export default SettingCard
import { View, Text,Image,TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import COLORS from './consts/colors'

const PersonalInformation = () => {


  


  return (
    <View style={{display:"flex",justifyContent:"center",alignItems:"center" ,marginHorizontal:15,marginTop:120,backgroundColor:COLORS.backgroundblue}}>

        
      <View style={{position:"relative"}}>
      <Image
        style={{height:150,width:150,borderRadius:100}}
        source={require('./assets/man.jpg')}
      />
      <View style={{position:"absolute",backgroundColor:COLORS.red,bottom:5,right:0,borderRadius:5}}>
      <FontAwesome5 name='pen' color="white" size={18} style={{padding:5}}/>

      </View>
      </View>

      <View style={{marginTop:50,backgroundColor:"white",width:"95%",padding:15}}>
        <View style={{borderColor:"grey",borderRadius:10,borderWidth:1}}>
            <Text style={{marginLeft:20,marginTop:10,color:"grey"}}>Name</Text>
            <TextInput
            placeholder='Name'
        style={{marginLeft:20,color:"black"}}
      
      />
        </View>


        <View style={{borderColor:"grey",borderRadius:10,borderWidth:1,marginTop:20}} >
            <Text style={{marginLeft:20,marginTop:10,color:"grey"}}>Phone Number</Text>
            <TextInput
            placeholder='Phone Number'
        style={{marginLeft:20,color:"black"}}
      
      />

        </View>

        <View style={{borderColor:"grey",borderRadius:10,borderWidth:1,marginTop:20}} >
            <Text style={{marginLeft:20,marginTop:10,color:"grey"}}>Email</Text>
            <TextInput
            placeholder='ex@gmail.com'
        style={{marginLeft:20,color:"black"}}
        
      />
        </View>
        
      </View>

      <View style={{marginTop:100,width:"95%",padding:15,display:"flex",justifyContent:"center",alignItems:"center"}}>

      <TouchableOpacity  style={{ height: 60,width:"95%",backgroundColor:COLORS.red ,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:10}}>
        <Text style={{color:"white"}}>Save Changes</Text>
       </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default PersonalInformation
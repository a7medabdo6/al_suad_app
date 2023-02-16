import { View, Text ,Image,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import COLORS from './consts/colors'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const CreateNewPassword = () => {
  return (
    <SafeAreaView style={{backgroundColor:"#FFFFFF",flex:1}}>
    <View style={{marginTop:100}}>
      <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Image
        style={{height:250,width:"90%"}}
        source={require('./assets/1.png')}
      />
      </View>
      <View>

      <View style={{borderWidth:1,borderColor:"grey",borderRadius:20,marginHorizontal:10, display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
        <View style={{marginRight:10}}>
        <FontAwesome5 name='lock' color={COLORS.red} size={18} style={{padding:5,marginLeft:20}}/>

        </View>

        <View>
        <Text style={{marginTop:10,color:"grey"}}>New Password</Text>
            <TextInput
            placeholder='***********'
        style={{color:"black"}}
      />

        </View>

        </View>
   

        <View>
        <FontAwesome5 name='eye-slash' color={COLORS.red} size={18} style={{padding:5}}/>

        </View>

      </View>




      <View style={{marginTop:15,borderWidth:1,borderColor:"grey",borderRadius:20,marginHorizontal:10, display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
        <View style={{marginRight:10}}>
        <FontAwesome5 name='lock' color={COLORS.red} size={18} style={{padding:5,marginLeft:20}}/>

        </View>

        <View>
        <Text style={{marginTop:10,color:"grey"}}>Confirm Password Password</Text>
            <TextInput
            placeholder='***********'
        style={{color:"black"}}
      />

        </View>

        </View>
   

        <View>
        <FontAwesome5 name='eye-slash' color={COLORS.red} size={18} style={{padding:5}}/>

        </View>

      </View>


      </View>

      <View style={{marginTop:150,width:"100%",padding:15,display:"flex",justifyContent:"center",alignItems:"center"}}>

      <TouchableOpacity  style={{ height: 60,width:"100%",backgroundColor:COLORS.red ,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:10}}>
        <Text style={{color:"white"}}>Continue</Text>
       </TouchableOpacity>
        
      </View>
    
    </View>
    </SafeAreaView>
  )
}

export default CreateNewPassword
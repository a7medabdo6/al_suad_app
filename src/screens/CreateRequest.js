import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Box, Progress, NativeBaseProvider} from 'native-base';
import FirstInput from '../Components/Inputs/FirstInput';

import BasicButton from '../Components/Buttons/BasicButton';
import SelectBox from '../Components/Inputs/SelectBox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import house from '../consts/houses';
import COLORS from '../consts/colors';
import TextArea from '../Components/Inputs/TextArea';
const {width} = Dimensions.get('screen');
import {api} from '../axios';

const CreateRequestScreen = () => {
  const [RequestTypeData, setRequestTypeData] = useState([]);
  const callRquestTypes = async () => {
    try {
      const result = await api.post('api/generic/helpdesk.ticket.type', {});
      setRequestTypeData(result.data.result);
      // console.log(result, 'helpdesk');
    } catch (error) {
      console.log(error, 'error helpdesk');
    }
  };
  useEffect(() => {
    callRquestTypes();
    return () => {};
  }, []);

  // const house = route.params;
  const [name, setname] = useState('');

  const Card = () => {
    return (
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          marginVertical: 10,
        }}>
        <View>
          <Image
            source={house[0].image}
            style={{width: 50, height: 50, borderRadius: 10}}
          />
        </View>

        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'column',
            marginHorizontal: 10,
            height: 50,
            width: '60%',
          }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              width: '100%',
              marginVertical: 5,
            }}>
            <Text style={{color: COLORS.dark}}>je5542222.jpg</Text>
            <Text>76%</Text>
          </View>
          <View style={{width: '100%'}}>
            <NativeBaseProvider>
              <Box w="100%" maxW="400">
                <Progress size="xs" value={45} />
              </Box>
            </NativeBaseProvider>
          </View>
        </View>
        <View
          style={{
            width: '20%',
            justifyContent: 'center',
            marginHorizontal: 20,
          }}>
          <MaterialCommunityIcons name="close" size={20} color={COLORS.red} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <ScrollView>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />

        <View>
          <View style={style.detailsContainer}>
            <Text style={style.text}>Create Request</Text>
            <FirstInput text="Name" value={name} fun={e => setname(e)} />
            <SelectBox Type="Select  Type" data={RequestTypeData} />
            <TextArea text="Brief Description" />
            <View
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  marginRight: 20,
                  marginVertical: 15,
                }}>
                <MaterialIcons
                  name="attach-file"
                  size={25}
                  color={COLORS.blue}
                  style={{marginRight: 5}}
                />
                <Text
                  style={{
                    color: COLORS.dark,
                  }}>
                  Attach File
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  marginVertical: 15,
                }}>
                <MaterialIcons
                  name="photo-camera"
                  size={25}
                  color={COLORS.blue}
                  style={{marginHorizontal: 8}}
                />
                <Text
                  style={{
                    color: COLORS.dark,
                  }}>
                  Open Camera
                </Text>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                width: '95%',
                opacity: 0.2,
                marginVertical: 10,
                marginHorizontal: '2.5%',
              }}
            />
            <View
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'column',
                width: '95%',
              }}>
              <Text
                style={{
                  color: COLORS.dark,
                  marginVertical: 15,
                  fontWeight: 'bold',
                }}>
                Attachments
              </Text>
              <Card />
              <Card />
              <Card />
            </View>

            <BasicButton text="Submit" width={155} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
  },

  detailsContainer: {
    // flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
    //  position: 'absolute',
    // marginHorizontal:10,
    backgroundColor: COLORS.white,
    zIndex: 5,
    borderRadius: 25,
    paddingTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bluebox: {
    width: '85%',

    backgroundColor: COLORS.backgroundblue,
    borderRadius: 3,
    marginVertical: 8,
    paddingVertical: 3,
  },
  blueboxtext: {
    color: COLORS.blue,
    fontSize: 12,
    marginHorizontal: 3,
  },

  container: {
    // ...StyleSheet.absoluteFillObject,
    //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 200,
  },

  text: {
    color: COLORS.dark,
    fontWeight: 'bold',
    fontSize: 18,
    // width: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
});

export default CreateRequestScreen;

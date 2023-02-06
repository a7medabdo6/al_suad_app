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
  Pressable,
} from 'react-native';
import {Box, Progress, NativeBaseProvider} from 'native-base';
import FirstInput from '../Components/Inputs/FirstInput';
import Toast from 'react-native-simple-toast';

import BasicButton from '../Components/Buttons/BasicButton';
import SelectBox from '../Components/Inputs/SelectBox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import house from '../consts/houses';
import COLORS from '../consts/colors';
import TextArea from '../Components/Inputs/TextArea';
const {width} = Dimensions.get('screen');
import {api} from '../axios';
import PickFiles from '../Components/PickFiles';
import {useSelector} from 'react-redux';
import {useValidation} from 'react-native-form-validator';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const CreateRequestScreen = ({navigation}) => {
  const [RequestTypeData, setRequestTypeData] = useState([]);
  const [photo, setphoto] = React.useState('');
  const [disable, setDisable] = React.useState(false);

  const [name, setname] = useState('');
  const [type, settype] = useState('');
  const [allFilesdata, setallFilesdata] = React.useState([]);

  const [description, setDescription] = useState('');
  const {userInfo} = useSelector(state => state.userinfo);

  const callRquestTypes = async () => {
    try {
      const result = await api.post('api/generic/maintenance.request.type', {});
      setRequestTypeData(result.data.result);
      // console.log(result, 'helpdesk');
    } catch (error) {
      console.log(error, 'error helpdesk');
    }
  };
  const selectedProp = useSelector(state => state.MyProperties.selectedProp);
  const UploadImage = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    };
    launchCamera(options, async res => {
      if (res.didCancel) {
      } else if (res.errorCode == 'permission') {
      } else if (res.errorCode == 'others') {
      } else {
        setphoto([`data:image/png;base64,${res.assets[0].base64}`]);
        // console.log(res.assets[0], 'res.assets[0]');
        // setpicName(res.assets[0].fileName);
        setallFilesdata([{type: 'image/png', name: 'photo'}]);
        // console.log(res.assets[0].fileName, res.assets[0]);
      }
    });
  };
  const {validate, isFieldInError, getErrorsInField, getErrorMessages} =
    useValidation({
      state: {name, type, photo, description},
    });
  var callRequested = false;
  const callCreateReq = async () => {
    validate({
      name: {required: true, minlength: 1},
      type: {required: true},
      photo: {required: true, minlength: 1},
      description: {required: true, minlength: 1},
    });
    if (getErrorMessages() || !name || !type || !photo || !description) {
      return;
    } else {
      try {
        setDisable(true);
        const res = await api.post('api/property_create_request', {
          params: {
            flat: selectedProp.id,
            partner: userInfo.partner_id,
            name: name,
            description: description,
            type: type,
            files: photo,
          },
        });
        if (res.data.result) {
          Toast.show('Request Created Succefully.', Toast.LONG, {
            backgroundColor: 'orange',
          });

          navigation.goBack();
        }
        // console.log(result, 'helpdesk');
      } catch (error) {
        setDisable(false);
        console.log(error, 'error ');
      }
    }
  };
  useEffect(() => {
    callRquestTypes();
    // console.log(allFilesdata, 'alllllllll');
    return () => {};
  }, []);

  // const house = route.params;

  const Card = ({file, index}) => {
    console.log(file, 'fillee');
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
          {file.type == 'image/png' && (
            <>
              <Image
                source={{uri: file.source}}
                style={{width: 50, height: 50}}
              />
              {/* <FontAwesome
                name="photo"
                color="black"
                style={{borderRadius: 10, fontSize: 50}}
              /> */}
            </>
          )}
          {file.type == 'application/pdf' && (
            <FontAwesome
              name="file-pdf-o"
              color="black"
              style={{borderRadius: 10, fontSize: 50}}
            />
          )}
          {file.type == 'video/mp4' && (
            <FontAwesome
              name="file-video-o"
              color="black"
              style={{borderRadius: 10, fontSize: 50}}
            />
          )}
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
            <Text style={{color: COLORS.dark}}>{file.name}</Text>
            <Text>76%</Text>
          </View>
          <View style={{width: '100%'}}>
            <NativeBaseProvider>
              <Box w="100%" maxW="400">
                <Progress size="xs" value={100} />
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
          <Pressable
            onPress={() =>
              setallFilesdata(old => {
                // console.log(old, index, 'index');
                return old.filter((item, idx) => index != idx);
              })
            }>
            <MaterialCommunityIcons name="close" size={20} color={COLORS.red} />
          </Pressable>
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
            {isFieldInError('name') &&
              getErrorsInField('name').map(errorMessage => (
                <Text key={errorMessage} style={{color: 'red'}}>
                  {errorMessage}
                </Text>
              ))}
            <SelectBox
              Type="Select  Type"
              data={RequestTypeData}
              settype={settype}
              type={type}
            />
            {isFieldInError('type') &&
              getErrorsInField('type').map(errorMessage => (
                <Text key={errorMessage} style={{color: 'red'}}>
                  {errorMessage}
                </Text>
              ))}
            <TextArea
              text="Brief Description"
              value={description}
              fun={e => setDescription(e)}
            />
            {isFieldInError('description') &&
              getErrorsInField('description').map(errorMessage => (
                <Text key={errorMessage} style={{color: 'red'}}>
                  {errorMessage}
                </Text>
              ))}
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
                <PickFiles
                  setResult={setphoto}
                  result={photo}
                  setallFilesdata={setallFilesdata}
                />
              </View>
              <Pressable onPress={() => UploadImage()}>
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
              </Pressable>
            </View>
            {isFieldInError('photo') &&
              getErrorsInField('photo').map(errorMessage => (
                <Text key={errorMessage} style={{color: 'red'}}>
                  {errorMessage}
                </Text>
              ))}
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
              {allFilesdata.map((file, index) => {
                return <Card file={file} index={index} />;
              })}
            </View>

            <BasicButton
              text="Submit"
              width={155}
              onPress={callCreateReq}
              disable={disable}
            />
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

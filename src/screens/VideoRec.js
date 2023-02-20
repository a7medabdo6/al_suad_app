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
import BottomSheetRec from '../Components/Sheets/BottomSheetRec';
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
import VideoRec from '../Components/VideoRec';

const VideoRecScreen = ({navigation, route}) => {
  const data = route?.params.data;
  const [RequestTypeData, setRequestTypeData] = useState([]);
  const [photo, setphoto] = React.useState('');
  const [disable, setDisable] = React.useState(false);

  const [Isprogress, setIsprogress] = React.useState(false);

  // const [name, setname] = useState('');
  // const [type, settype] = useState('');
  // const [allFilesdata, setallFilesdata] = React.useState([]);

  // const [description, setDescription] = useState('');
  const {userInfo} = useSelector(state => state.userinfo);

  const selectedProp = useSelector(state => state.MyProperties.selectedProp);

  var callRequested = false;
  const callCreateReq = async video => {
    setIsprogress(true);

    console.log(data, 'data');
    try {
      setDisable(true);
      const res = await api.post('api/property_create_request', {
        params: {
          flat: data.flat,
          partner: data.partner,
          name: data.name,
          description: data.description,
          type: data.type,
          files: [`data:video/mp4;base64,${video}`],
        },
      });
      if (res.data.result) {
        Toast.show('Request Created Succefully.', Toast.LONG, {
          backgroundColor: 'orange',
        });
        setIsprogress(false);

        navigation.goBack();
      }
      // console.log(result, 'helpdesk');
    } catch (error) {
      setDisable(false);
      console.log(error, 'error ');
    }
  };

  // const house = route.params;

  return (
    <SafeAreaView style={{height: '100%'}}>
      <ScrollView style={{height: '100%'}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />

        <View style={style.detailsContainer}>
          <VideoRec
            callCreateReq={callCreateReq}
            setIsprogress={setIsprogress}
            Isprogress={Isprogress}
          />
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
    flex: 1,
    paddingHorizontal: 20,
    // marginTop: 10,
    //  position: 'absolute',
    // marginHorizontal:10,
    // backgroundColor: 'yellow',
    // zIndex: 5,
    // borderRadius: 25,
    paddingTop: 20,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
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

export default VideoRecScreen;

import React, {useRef, useState, useEffect} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {RNCamera} from 'react-native-camera';
import RNFS from 'react-native-fs';
import COLORS from '../consts/colors';

const App = ({callCreateReq}) => {
  const camera = useRef(null);
  const [video, setVideo] = useState('');
  const ConvertVideoBase64 = async uri => {
    const base64Video = await RNFS.readFile(uri, 'base64');
    setVideo(base64Video);
  };
  const Submit = async () => {
    if (camera) {
      const {uri, codec = 'mp4'} = await camera.current.recordAsync();
      console.info(uri, 'uri');
      ConvertVideoBase64(uri);
    }
  };
  const Stop = () => {
    camera.current.stopRecording();
    callCreateReq(video);
  };
  useEffect(() => {
    console.log(video, 'video');

    return () => {};
  }, [video]);

  const RenderCam = () => {
    return (
      <RNCamera
        ref={camera}
        style={styles.preview}
        type="back"
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View
        style={{flexDirection: 'row', height: '70%', backgroundColor: 'white'}}>
        <View style={{width: '100%', height: '100%'}}>{RenderCam()}</View>
      </View>

      <Pressable
        onPress={Submit}
        style={{
          height: 50,
          marginTop: 30,
          backgroundColor: COLORS.red,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
          Start
        </Text>
      </Pressable>
      <Pressable
        onPress={Stop}
        style={{
          height: 50,
          marginTop: 10,
          backgroundColor: COLORS.red,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            backgroundColor: COLORS.red,
          }}>
          Stop and Upload
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  preview: {
    width: '100%',
    height: 450,
  },
});

export default App;

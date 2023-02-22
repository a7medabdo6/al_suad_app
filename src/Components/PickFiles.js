import {View, Text, Button, Pressable, Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import storage from '@react-native-firebase/storage';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';
import COLORS from '../consts/colors';
import {Alert} from 'react-native';
const PickFiles = ({result, setResult, setallFilesdata, seturis}) => {
  useEffect(() => {
    // console.log(JSON.stringify(result, null, 2));
  }, [result]);

  const handleError = err => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };
  const uploadImage = async uri => {
    // const { uri } = image;
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    const task = storage().ref(filename).putFile(uploadUri);
    console.log(uri, 'uri');
    try {
      const res = await task;
      // console.error(res.metadata.fullPath, 'res res');
      seturis(old => [
        old,
        `https://firebasestorage.googleapis.com/v0/b/realestate-3b42f.appspot.com/o/${res.metadata.fullPath}`,
      ]);
      // Alert.alert(
      //   'Photo uploaded!',
      //   `https://firebasestorage.googleapis.com/v0/b/realestate-3b42f.appspot.com/o/${res.metadata.fullPath}`,
      // );
    } catch (e) {
      console.error(e, 'eeeee');
    }
  };
  return (
    <Pressable
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
      }}
      onPress={() => {
        DocumentPicker.pick({
          allowMultiSelection: true,
          type: [types.allFiles],
          copyTo: 'cachesDirectory',
        })
          .then(async res => {
            let FilesArr = [];
            let FilesArrdata = [];
            // uploadImage(res[0].fileCopyUri);
            // console.log(res, 'resssssssssssssssssssssssssssss');
            for (let index = 0; index < res.length; index++) {
              uploadImage(res[index].fileCopyUri);

              const file = await RNFetchBlob.fs.readFile(
                res[index].fileCopyUri,
                'base64',
              );
              FilesArrdata.push({
                ...res[index],
                source: `data:${res[index].type};base64,${file}`,
              });
              FilesArr.push(`data:${res[index].type};base64,${file}`);
            }

            setResult(FilesArr);
            setallFilesdata(FilesArrdata);
          })
          .catch(handleError);
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
    </Pressable>
  );
};

export default PickFiles;

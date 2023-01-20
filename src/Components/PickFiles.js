import {View, Text, Button, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';
import COLORS from '../consts/colors';
const PickFiles = ({result, setResult, setallFilesdata}) => {
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
        })
          .then(async res => {
            let FilesArr = [];
            let FilesArrdata = [];
            // console.log(res, 'resssssssssssssssssssssssssssss');
            for (let index = 0; index < res.length; index++) {
              const file = await RNFetchBlob.fs.readFile(
                res[index].uri,
                'base64',
              );
              FilesArrdata.push(
                {
                  ...res[index],
                  source: `data:${res[index].type};base64,${file}`,
                },
              );
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

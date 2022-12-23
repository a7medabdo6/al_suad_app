import React, {useRef} from 'react';
import {View, Button, Text, Image} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import SelectBox from '../Inputs/SelectBox';
import BasicButton from '../Buttons/BasicButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Box, Progress, Center, NativeBaseProvider} from 'native-base';

import COLORS from '../../consts/colors';
export default function Example() {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <BasicButton
        text="Upload"
        color={COLORS.blue}
        width={150}
        onPress={() => refRBSheet.current.open()}
        Icon={
          <MaterialCommunityIcons
            color={COLORS.white}
            size={18}
            name="plus-circle-outline"
          />
        }
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={400}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(178, 182, 186, 0.9)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            borderRadius: 30,
          },
        }}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '100%',
          }}>
          <View style={{height: 70}}>
            <SelectBox Type="Type" />
          </View>
          <View style={{height: 70}}>
            <SelectBox Type="Expiry date" />
          </View>
          <View
            style={{
              borderColor: COLORS.grey,
              borderWidth: 1,
              width: '78%',
              height: 120,
              borderRadius: 10,
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding: 5,
              flexDirection: 'column',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'row',
                marginBottom: 15,
              }}>
              <MaterialCommunityIcons
                color={COLORS.grey}
                size={18}
                name="plus-circle-outline"
              />
              <Text style={{marginHorizontal: 5}}>Upload file</Text>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View>
                <Image
                  source={require('../../assets/house3.jpg')}
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
                  <Text>heel</Text>
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
                <MaterialCommunityIcons
                  name="close"
                  size={20}
                  color={COLORS.red}
                />
              </View>
            </View>
          </View>
        </View>
      </RBSheet>
    </View>
  );
}

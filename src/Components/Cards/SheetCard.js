import COLORS from '../../consts/colors';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
const SheetCard = ({openModal, setOpenModal}) => {
  return (
    <View>
      <ScrollView>
        <View style={style.flexcolstart}>
          <View style={style.flexRowbtw}>
            <View style={style.flexcolstart2}>
              <Text style={{color: COLORS.dark, fontWeight: 'bold'}}>
                MS0213
              </Text>
              <Text
                style={{
                  color: COLORS.grey,
                  fontWeight: '400',
                  fontWeight: 'bold',
                }}>
                10/01/2021
              </Text>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}>
                <View
                  style={{
                    marginVertical: 2,
                    marginHorizontal: 5,
                  }}>
                  <Text style={{color: COLORS.dark, fontWeight: 'bold'}}>
                    Status : <Text style={{color: 'green'}}>Solved</Text>
                  </Text>
                </View>
                <View
                  style={{
                    padding: 5,
                  }}>
                  <Text style={{color: COLORS.blue}}>
                    Type : <Text>Electrical</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              borderColor: "#DCDCDC",
              borderWidth: 2,
              borderRadius: 25,
              width: '100%',
              padding: 20,
            }}>
            <Text style={{marginVertical: 5}}>12/02/2021, 2:36 PM</Text>
            <Text style={{marginBottom: 15,color:COLORS.dark}}>
              Because of my late flight Hamila was very friendly for waiting for
              me until I arrived. Checking in and out was easy with the code. I
              personally prefer it over door keys.
            </Text>
            <Text style={{color:COLORS.dark}}>
              I like the area in Peckham, it was nice and quite. Easy to grab
              busses close by anytime, but it takes around 30-40min to central
              of London.
            </Text>
            <Text
              style={{
                marginVertical: 15,
                fontWeight: 'bold',
                color: COLORS.dark,
              }}>
              Attachments
            </Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 5,
                  marginRight: 5,
                }}
                source={require('../../assets/house1.jpg')}
              />
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 5,
                  marginHorizontal: 5,
                }}
                source={require('../../assets/house1.jpg')}
              />
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 5,
                  marginHorizontal: 5,
                }}
                source={require('../../assets/house1.jpg')}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: COLORS.backgroundblue,
              borderRadius: 25,
              width: '100%',
              padding: 20,
              marginVertical: 20,
            }}>
            <Text style={{marginVertical: 5,color:COLORS.grey}}>12/02/2021, 2:36 PM</Text>
            <Text
              style={{
                marginVertical: 15,
                fontWeight: 'bold',
                color: COLORS.dark,
              }}>
              Tenant Feedback
            </Text>
            <Text style={{marginBottom: 15}}>
              The flat is located in a quiet and well-equipped neighborhood in
              terms of transport.
            </Text>
            <Text style={{color:COLORS.dark}}>
              There is no shortage of parks and places where you can eat and
              it's about twenty minutes by bus from a supermarket, really easy
              to reach.
            </Text>
            <Text style={{color:COLORS.dark}}>
              They are very welcoming, the apartment is nice and kept in order:
              what can I say I can only recommend this place, I hope to be back
              soon.
            </Text>
          </View>
          <View style={{width: '95%', marginBottom: 50}}>
            <TextInput placeholder=" Write a message..." style={style.input} />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Pressable
          style={{
            backgroundColor: COLORS.dark,
            width: 120,
            borderRadius: 8,
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            marginHorizontal: 5,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              backgroundColor: COLORS.dark,
              color: COLORS.white,
            }}>
            Not Yet
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: '#14AD2F',
            width: 120,
            borderRadius: 8,
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            marginHorizontal: 5,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              backgroundColor: '#14AD2F',
              color: COLORS.white,
            }}>
            Solved
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  //   line: {
  //     // borderBottomColor: COLORS.grey,
  //     // borderColor: 'white',
  //     width: '90%',
  //     height: 1,
  //     borderWidth: 0.5,
  //     // opacity: 0.4,
  //     marginVertical: 20,
  //     marginHorizontal: '5%',
  //     // height: 10,
  //   },
  flexcolstart2: {
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 15,
    marginVertical: 10,
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    width: '85%',
  },
  flexcolstart: {
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 15,
    marginVertical: 10,
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    width: '100%',
  },
  flexRowbtw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginVertical: 5,
    marginHorizontal: 6,
    width: '80%',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderColor: '#DCDCDC',
    borderRadius: 8,
    color:COLORS.grey
  },
});
export default SheetCard;

import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Calenders from '../Components/Calenders';
import Time from '../Components/Calenders/Time';
import COLORS from '../consts/colors';
import {TextInput} from '@react-native-material/core';
import TouchableOpacityBtn from '../Components/Buttons/TouchBtn';
import SCREENS from '../../Layout';
import {ScrollView} from 'react-native';
import {useCreateVistApi} from '../apis/Home';
import {useSelector} from 'react-redux';
import ModalPopup from '../Components/Modal';

const LiveVisit = ({route}) => {
  const [name, setName] = useState(null);
  const [mobile, setmobile] = useState(null);
  const [email, setemail] = useState(null);
  const [description, setdescription] = useState(null);
  const [flat, setflat] = useState(route?.params?.id);
  const [modalVisible, setModalVisible] = useState(true);

  const stateOfCreateVisit = useSelector(
    state => state.CreateVist.stateOfCreateVisit,
  );

  //
  const {mutate: createVisit, isLoading} = useCreateVistApi();

  const HandlecreateVisit = async () => {
    await createVisit({name, mobile, email, flat: 669, description});
    console.log(stateOfCreateVisit, 'stateOfCreateVisit');
  };
  useEffect(() => {
    if (stateOfCreateVisit) {
      setModalVisible(true);
    }
  }, [stateOfCreateVisit]);

  return (
    <ScrollView style={{height: '100%'}}>
      {/* <ModalPopup
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      /> */}
      {stateOfCreateVisit && (
        <ModalPopup
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      )}
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>
            Let us know when you are availablem, and we will contact you to
            arange a visit.
          </Text>
          <Text style={styles.head}>Select an available date</Text>
          <View style={{height: 320}}>
            <Calenders />
          </View>
          <View style={styles.timeOuterBox}>
            <Time bgcolor={COLORS.backgroundblue} />
            <Time bgcolor={COLORS.backgroundblue} />
            <Time bgcolor={COLORS.backgroundblue} />
            <Time bgcolor={COLORS.backgroundblue} />
            <Time bgcolor={COLORS.backgroundblue} />
            <Time bgcolor={COLORS.backgroundblue} />
          </View>
          <Text style={styles.head}>Fill the Form Below</Text>
          <View style={{marginVertical: 5, width: '100%'}}>
            <TextInput
              variant="outlined"
              label="Full Name"
              placeholderTextColor={COLORS.blue}
              style={{margin: 5}}
              color={COLORS.blue}
              value={name}
              onChangeText={e => setName(e)}
            />
            <TextInput
              variant="outlined"
              label="E-mail "
              placeholderTextColor={COLORS.blue}
              style={{margin: 5}}
              color={COLORS.blue}
              value={email}
              onChangeText={e => setemail(e)}
            />
            <TextInput
              variant="outlined"
              label="Mobile"
              placeholderTextColor={COLORS.blue}
              style={{margin: 5}}
              color={COLORS.blue}
              value={mobile}
              onChangeText={e => setmobile(e)}
            />
            <TextInput
              variant="outlined"
              label="Description"
              placeholderTextColor={COLORS.blue}
              style={{margin: 5}}
              color={COLORS.blue}
              value={description}
              onChangeText={e => setdescription(e)}
            />
          </View>

          <TouchableOpacityBtn
            color={
              name && email && mobile && description
                ? SCREENS.OREANGE
                : SCREENS.DARKGREY
            }
            text="Send Visit Request"
            width={'100%'}
            disable={name && email && mobile && description ? false : true}
            style={{
              borderRadius: 10,
              paddingVertical: 20,
              marginVertical: 15,
            }}
            textcolor={SCREENS.WHITE}
            // outline={SCREEN.OREANGE}
            onPress={HandlecreateVisit}
            type="basic"
            textSize={14}
            // outline={SCREEN.DARKGREY}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flex: 1,
    backgroundColor: 'white',
  },
  box: {
    width: '95%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // backgroundColor: 'red',
    height: '100%',
  },
  timeOuterBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    color: COLORS.grey,
    fontSize: 14,
    marginVertical: 10,
  },
  head: {
    color: COLORS.dark,
    marginVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  timeBox: {
    padding: 15,
    borderColor: COLORS.grey,
    borderRadius: 5,
  },
});
export default LiveVisit;

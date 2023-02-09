import {createStackNavigator} from '@react-navigation/stack';
import SuccessPaymentScreen from '../../screens/SuccessPayments';
import PaymentMethod from '../../screens/PaymentMethod';
import BasicHeader from '../Headers/BasicHeader';
import ContactHeader from '../Headers/ContactHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PaymentScreen from '../../screens/Payment';
import COLORS from '../../consts/colors';
import PaymentHeader from '../Headers/PaymentHeader';
import MyProperties from '../../screens/MyProperties';
import CreateRequestScreen from '../../screens/CreateRequest';
import Inquiry from '../../screens/Inquiry';
import LogoTitle from '../Headers/LogoHeader';
import {useSelector} from 'react-redux';
import DetailsScreen from '../../screens/DetailsScreen';
import ContractDetails from '../../screens/ContractDetails';
import PdfView from '../../screens/PdfVeiw';
import VideoRecScreen from '../../screens/VideoRec';
import SettingScreen from '../../screens/Settings';
import MyVisitsScreen from '../../screens/MyVisits';

const Stack = createStackNavigator();

export default function MyStack() {
  const selectedProp = useSelector(state => state.MyProperties.selectedProp);

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: props => <BasicHeader {...props} title="Settings" />,
          headerShown: false,
        }}
        name="SettingScreen"
        component={SettingScreen}
      />
      <Stack.Screen
        options={{
          headerLeft: false,
          headerStyle: {
            backgroundColor: COLORS.backgroundblue,
          },
          headerTitle: props => (
            <BasicHeader
              {...props}
              title="My Visits"
              Icon={
                <MaterialIcons
                  name="arrow-back-ios"
                  size={20}
                  color="black"
                  // onPress={navigation.goBack}
                />
              }
            />
          ),
          headerShown: true,
        }}
        name="myVisits"
        component={MyVisitsScreen}
      />
    </Stack.Navigator>
  );
}

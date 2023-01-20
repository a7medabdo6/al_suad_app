import {createStackNavigator} from '@react-navigation/stack';
import SuccessPaymentScreen from '../../screens/SuccessPayments';
import PaymentMethod from '../../screens/PaymentMethod';
import BasicHeader from '../Headers/BasicHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PaymentScreen from '../../screens/Payment';
import COLORS from '../../consts/colors';
import PaymentHeader from '../Headers/PaymentHeader';
import MyProperties from '../../screens/MyProperties';
import HomeScreen from '../../screens/Home';
import DetailsScreen from '../../screens/DetailsScreen';
import Inquiry from '../../screens/Inquiry';
import SubmitInquiry from '../../screens/SubmitInquiry';
import LogoHeader from '../Headers/LogoHeader';
import FilterScreen from '../../screens/FilterScreen';
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="HomeInstak"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerLeft: false,
          headerBackTitleVisible: false,
          headerShown: false,
        }}
        name="DetailsScreenInStack"
        component={DetailsScreen}
      />
      <Stack.Screen
        options={{
          headerLeft: false,
          headerBackTitleVisible: false,
          headerShown: true,
          header: props => <LogoHeader {...props} />,
        }}
        name="Inquiry"
        component={Inquiry}
      />
      <Stack.Screen
        options={{
          headerLeft: false,
          headerBackTitleVisible: false,
          headerShown: true,
          header: props => <LogoHeader {...props} />,
        }}
        name="SubmitInquiry"
        component={SubmitInquiry}
      />
      <Stack.Screen
        options={{
          headerLeft: false,
          headerBackTitleVisible: false,
          headerShown: true,
          header: props => (
            <BasicHeader
              {...props}
              title="Filters"
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
        }}
        name="FilterScreen"
        component={FilterScreen}
      />
    </Stack.Navigator>
  );
}

import {createStackNavigator} from '@react-navigation/stack';
import SuccessPaymentScreen from '../../screens/SuccessPayments';
import PaymentMethod from '../../screens/PaymentMethod';
import BasicHeader from '../Headers/BasicHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PaymentScreen from '../../screens/Payment';
import COLORS from '../../consts/colors';
import PaymentHeader from '../Headers/PaymentHeader';
import MyProperties from '../../screens/MyProperties';
import CreateRequestScreen from '../../screens/CreateRequest';
import Inquiry from '../../screens/Inquiry';
import LogoTitle from '../Headers/LogoHeader';
import LoginScreen from '../../screens/Login';
import MyTabs from './BottomStackNavigaion';
import SignupScreen from '../../screens/SignUp';
import HomeScreenGuest from '../../screens/HomeGuest';
import FilterScreen from '../../screens/FilterScreen';
import ResetPassword from '../../screens/ResetPassword';
import HomeDataFilter from '../../screens/HomeDataFilter';
import DetailsScreen from '../../screens/DetailsScreen';
import LogoHeader from '../Headers/LogoHeader';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.white,
            height: 80,
          },

          headerShown: false,
        }}
        name="login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.white,
            height: 70,
          },

          headerLeft: false,
          headerBackTitleVisible: false,
          headerShown: false,
        }}
        name="signup"
        component={SignupScreen}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.white,
            height: 70,
          },

          headerLeft: false,
          headerBackTitleVisible: false,
          headerShown: false,
        }}
        name="HomeScreenGuest"
        component={HomeScreenGuest}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.white,
            height: 70,
          },

          headerLeft: false,
          headerBackTitleVisible: false,
          headerShown: false,
        }}
        name="FilterScreen"
        component={FilterScreen}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.white,
            height: 70,
          },

          headerLeft: false,
          headerBackTitleVisible: false,
          headerShown: false,
        }}
        name="ResetPassword"
        component={ResetPassword}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="HomeDataFilter"
        component={HomeDataFilter}
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
    </Stack.Navigator>
  );
}

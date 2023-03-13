import {createStackNavigator} from '@react-navigation/stack';
import COLORS from '../../consts/colors';
import LoginScreen from '../../screens/Login';
import SignupScreen from '../../screens/SignUp';

import GuestBottomStackNavigaion from '../../Components/Navigation/GuestBottomStackNavigaion';
import Welcome from '../../screens/Welcome';
import HomeScreen from '../../screens/Home';
import Houses from '../../screens/Houses';
import DetailsScreen from '../../screens/DetailsScreen';
import ExploreScreen from '../../screens/ExploreScreen';
import SettingsScreen from '../../screens/Settings';
import Signup from '../../screens/SignUp';
import MyPropertiesScreen from '../../screens/MyProperties';
import PaymentScreen from '../../screens/Payment';
import Navigation from '../../screens/Notification';
import LiveVisit from '../../screens/LiveVisit';
import FavScreen from '../../screens/Fav';
import TermsOfService from '../../TermsOfService';
import AboutUs from '../../AboutUs';
import Policy from '../../Policy';
import HelpCenterScreen from '../../screens/HelpCenterScreen';
import RecoveryPassword from '../../screens/RecoveryPassword';
import ResetNewPassword from '../../screens/ResetPassword';
import OTPCode from '../../screens/OTPCode';
import CreateNewPassword from '../../CreateNewPassword';
import PaymentMethod from '../../screens/PaymentMethod';
const Stack = createStackNavigator();

export default function MainStack() {
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
        name="welcome"
        component={Welcome}
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
        name="Main"
        component={HomeScreen}
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
        name="Settings"
        component={SettingsScreen}
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
        name="Fav"
        component={FavScreen}
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
        name="MyProperties"
        component={MyPropertiesScreen}
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
        name="PaymentScreen"
        component={PaymentScreen}
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
        name="Explore"
        component={ExploreScreen}
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
        name="houses"
        component={Houses}
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
        component={Signup}
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
        name="PaymentMethod"
        component={PaymentMethod}
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
        name="Details_Screen"
        component={DetailsScreen}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.white,
            height: 70,
          },

          headerBackTitleVisible: false,
          headerShown: true,
        }}
        name="Navigation"
        component={Navigation}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.white,
            height: 70,
          },

          headerBackTitleVisible: false,
          headerShown: true,
          headerTitle: 'Request a live visit',
        }}
        name="LiveVisit"
        component={LiveVisit}
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
        name="TermsOfService"
        component={TermsOfService}
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
        name="AboutUs"
        component={AboutUs}
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
        name="Policy"
        component={Policy}
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
        name="HelpCenterScreen"
        component={HelpCenterScreen}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.white,
            height: 80,
          },

          headerShown: true,
          headerTitle: 'Create New Password ',
        }}
        name="CreateNewPassword"
        component={CreateNewPassword}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.white,
            height: 80,
          },

          headerShown: true,
          headerTitle: 'Recovery password',
        }}
        name="welcome23"
        component={RecoveryPassword}
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
        name="GuestBottomStackNavigaion"
        component={GuestBottomStackNavigaion}
      />
    </Stack.Navigator>
  );
}

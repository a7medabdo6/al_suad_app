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
import MyPropertiesScreen from '../../screens/MyProperties';
import PaymentScreen from '../../screens/Payment';
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
        name="Details_Screen"
        component={DetailsScreen}
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

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
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerLeft: false,
          headerStyle: {
            backgroundColor: COLORS.backgroundblue,
          },
          headerTitle: props => (
            <BasicHeader
              {...props}
              title="My properties"
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
          tabBarIcon: ({focused}) => {
            return (
              <Fontisto
                name="holiday-village"
                size={18}
                color={focused ? COLORS.red : COLORS.dark}
              />
            );
          },
          headerShown: true,
        }}
        name="MyProperties"
        component={MyProperties}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.white,
            height: 70,
          },
          headerTitle: props => (
            <PaymentHeader {...props} title="My properties" />
          ),
          headerLeft: false,
          headerBackTitleVisible: false,
          headerShown: true,
        }}
        name="PaymentScreen"
        component={PaymentScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: props => (
            <BasicHeader {...props} title="Payment Method" />
          ),
          headerShown: true,
        }}
        name="PaymentMethod"
        component={PaymentMethod}
      />
      <Stack.Screen
        options={{
          headerTitle: props => (
            <BasicHeader {...props} title="Payment Successful" />
          ),
          headerShown: true,
        }}
        name="SuccessPaymentScreen"
        component={SuccessPaymentScreen}
      />
      <Stack.Screen
        options={{
          header: props => <LogoTitle {...props} />,
          headerLeft: false,
          headerBackTitleVisible: false,
          headerShown: true,
        }}
        name="CreateRequestScreen"
        component={CreateRequestScreen}
      />
    </Stack.Navigator>
  );
}

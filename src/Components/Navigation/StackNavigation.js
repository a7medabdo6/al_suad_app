import {createStackNavigator} from '@react-navigation/stack';
import SuccessPaymentScreen from '../../screens/SuccessPayments';
import PaymentMethod from '../../screens/PaymentMethod';
import BasicHeader from '../Headers/BasicHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PaymentScreen from '../../screens/Payment';
import COLORS from '../../consts/colors';
import PaymentHeader from '../Headers/PaymentHeader';
import MyProperties from '../../screens/MyProperties';
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
          headerTitle: props => (
            <BasicHeader {...props} title="My properties" />
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
            <BasicHeader
              {...props}
              title="Payment Method"
              // Icon={
              //   <MaterialIcons
              //     name="arrow-back-ios"
              //     size={20}
              //     // onPress={navigation.goBack}
              //   />
              // }
            />
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
    </Stack.Navigator>
  );
}

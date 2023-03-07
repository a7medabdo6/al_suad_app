import {Calendar} from 'react-native-calendars';
import {View} from 'react-native';
import React from 'react';
import SCREENS from '../../../Layout';
export default class Example extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          height: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          //   backgroundColor: 'red',
          width: '100%',
          marginVertical: 5,
        }}>
        <Calendar
          style={{
            height: '100%',
            backgroundColor: 'white',
            color: 'black',
            opacity: 1,
            width: SCREENS.WIDTH - 50,
            marginHorizontal: 25,
            // margin: 'auto',
          }}
          headerStyle={{backgroundColor: 'rgba(89, 82, 208, 0.03)'}}
          // Initially visible month. Default = Date()
          current={new Date()}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          //   minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          //   maxDate={'2012-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMMM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          //   hideArrows={true}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
        />
      </View>
    );
  }
}

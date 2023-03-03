import { StyleSheet } from 'react-native';
import Colors from '../../consts/colors';
import Font from '../../consts/font';
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        height: Font.height,
    },
    down: { height: Font.height * .18 }
});
export default styles;
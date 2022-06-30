import {StyleSheet} from 'react-native';
import {StyleSheet as ReactStyleSheet} from 'react-native';


const createStyles = () =>
  StyleSheet.create({
    button: {
      width: '70%',
      alignSelf: 'center',
      backgroundColor: '#00bcd4',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#fff',
      fontSize: 20,
    },
  });

export default createStyles;

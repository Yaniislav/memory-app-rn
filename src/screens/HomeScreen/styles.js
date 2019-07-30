import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  title: {
    marginBottom: scale(30),
  },
});

export default styles;

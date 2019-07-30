import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  gameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  menuContainer: {
    paddingVertical: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

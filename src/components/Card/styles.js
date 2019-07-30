import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    height: verticalScale(80),
    margin: scale(5),
  },
  container: {
    height: verticalScale(80),
    borderRadius: scale(10),
    borderColor: 'black',
    borderWidth: scale(3),
  },
  checked: {
    borderColor: 'blue',
    opacity: 0.8,
  },
  frontSide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.cardBackgroundFront,
  },
  backSide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.cardBackgroundBack,
  },
});

export default styles;

import React, { useCallback } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import DefaultButton from '../../components/DefaultButton';
import DefaultText from '../../components/DefaultText';
import styles from './styles';

const HomeScreen = (props) => {
  const onStartGame = (cardsNumber) => {
    props.navigation.navigate('Game', { cardsNumber });
  };

  const onFourCardsPress = useCallback(() => onStartGame(4));
  const onEightCardsPress = useCallback(() => onStartGame(8));
  const onTwelveCardsPress = useCallback(() => onStartGame(12));

  return (
    <View style={styles.container}>
      <DefaultText style={styles.title}>
        Please, choose number of cards:
      </DefaultText>
      <DefaultButton
        title={'Four Cards'}
        onPress={onFourCardsPress}
      />
      <DefaultButton
        title={'Eight Cards'}
        onPress={onEightCardsPress}
      />
      <DefaultButton
        title={'Twelve Cards'}
        onPress={onTwelveCardsPress}
      />
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

export default HomeScreen;

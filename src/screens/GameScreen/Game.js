import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';

import DefaultButton from '../../components/DefaultButton';

import styles from './styles';
import Card from '../../components/Card';

export default class Game extends Component {
  static propTypes = {
    data: PropTypes.array,
    fetchError: PropTypes.bool,
    loading: PropTypes.bool,
    onBackPress: PropTypes.func,
    onCardPress: PropTypes.func,
    onPlayPress: PropTypes.func,
    hideCards: PropTypes.bool,
  };

  onPlayPress = () => {
    this.props.onPlayPress();
  }

  renderCards = () => {
    const {
      loading, fetchError, data, onCardPress, hideCards,
    } = this.props;
    if (loading) {
      return <ActivityIndicator size={'large'} />;
    }
    const numberOfColumns = data.length / 4;

    return data.map(({ value, checked }) => (
      <Card
        onPress={onCardPress}
        flex={numberOfColumns}
        key={value}
        number={value}
        hidden={hideCards}
        checked={checked}
      />
    ));
  }

  render() {
    const { onBackPress, loading, hideCards } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.gameContainer}>
          {this.renderCards()}
        </View>
        <View style={styles.menuContainer}>
          <DefaultButton
            title={'Play'}
            onPress={this.onPlayPress}
            disabled={loading || hideCards}
          />
          <DefaultButton
            title={'Change Mode'}
            onPress={onBackPress}
          />
      </View>
      </SafeAreaView>
    );
  }
}

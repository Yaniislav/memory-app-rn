import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';

import { get } from '../../utils/api';
import { NUMBERS_ENDPOINT } from '../../constants/endpoints';
import Game from './Game';

export default class GameScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      goBack: PropTypes.func,
    }),
  };

  state = {
    data: [],
    loading: true,
    fetchError: false,
    hideCards: false,
  }

  componentDidMount() {
    this.fetchNumbers();
  }

  sortedData = [];

  numberOfPress = 0;

  fetchNumbers = async () => {
    try {
      this.numberOfPress = 0;
      const count = this.props.navigation.getParam('cardsNumber', 4);
      const { data } = await get(NUMBERS_ENDPOINT, { count });
      this.sortedData = [...data].sort((first, second) => first - second);
      this.setState({
        data: data.map(value => ({ value, checked: false })),
        loading: false,
        hideCards: false,
      });
    } catch (error) {
      this.setState({ fetchError: true, loading: false, data: [] });
    }
  }

  onPlayPress = () => {
    this.setState({ hideCards: true });
  }

  onCardPress = (value) => {
    if (value === this.sortedData[this.numberOfPress]) {
      if (this.numberOfPress === this.state.data.length - 1) {
        Alert.alert('Congratulations!', 'You are the winner', [
          { text: 'OK', onPress: this.fetchNumbers },
        ]);
      }
      this.numberOfPress += 1;
      this.setState(prevState => ({
        data: prevState.data.map((item) => {
          return item.value === value ? { ...item, checked: true } : item;
        }),
      }));
    } else {
      Alert.alert('What a pitty!', 'Wrong answer', [
        { text: 'Try again', onPress: this.onTryAgainPress },
        { text: 'Change mode', onPress: this.onBackPress },
      ]);
    }
  }

  onTryAgainPress = () => {
    this.numberOfPress = 0;
    this.setState(prevState => ({
      data: prevState.data.map(item => ({ ...item, checked: false })),
    }));
  }

  onBackPress = () => {
    this.props.navigation.goBack();
  }

  render() {
    const {
      data, fetchError, loading, hideCards,
    } = this.state;
    return (
      <Game
        data={data}
        fetchError={fetchError}
        loading={loading}
        hideCards={hideCards}
        onBackPress={this.onBackPress}
        onCardPress={this.onCardPress}
        onPlayPress={this.onPlayPress}
        onTryAgainPress={this.fetchNumbers}
      />
    );
  }
}

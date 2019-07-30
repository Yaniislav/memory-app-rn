import React, { useCallback } from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import { scale } from 'react-native-size-matters';
import PropTypes from 'prop-types';
import FlipCard from 'react-native-flip-card';

import DefaultText from '../DefaultText';
import styles from './styles';

const { width } = Dimensions.get('window');
const itemHorizontalMargin = scale(20);

const Card = ({ number, flex, onPress, hidden, checked }) => {
  const itemWidth = (width / flex) - itemHorizontalMargin;
  const onItemPress = useCallback(() => onPress(number));
  const disabled = checked || !hidden;

  return (
    <TouchableOpacity onPress={onItemPress} disabled={disabled}>
      <View style={[styles.mainContainer, { width: itemWidth }]}>
        <FlipCard
          onPress={onItemPress}
          clickable={false}
          style={[styles.container, checked && styles.checked, { width: itemWidth }]}
          flipHorizontal={true}
          flipVertical={false}
          flip={!disabled}
        >
          <View style={styles.frontSide}>
            <DefaultText>{number}</DefaultText>
          </View>
          <View style={styles.backSide}>
            <DefaultText>?</DefaultText>
          </View>
        </FlipCard>
      </View>
    </TouchableOpacity>
  );
};

Card.propTypes = {
  number: PropTypes.number,
  flex: PropTypes.number,
  onPress: PropTypes.func,
  hidden: PropTypes.bool,
  checked: PropTypes.bool,
};

export default Card;

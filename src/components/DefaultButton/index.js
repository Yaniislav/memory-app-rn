import React from 'react';
import { Button, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const DefaultButton = ({ containerStyle, ...rest }) => (
  <View style={[styles.buttonContainer, containerStyle]}>
    <Button
      color="#841584"
      {...rest}
    />
  </View>
);

DefaultButton.propTypes = {
  containerStyle: PropTypes.object,
};

export default DefaultButton;

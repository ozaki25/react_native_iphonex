import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { currentPosition, stepLabels, stepIndivatorStyles } from '../config/StepIndicatorConfig';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    borderBottomWidth: 1.5,
    borderBottomColor: 'lightblue',
    // top: -47, // iphoneX
    paddingTop: 12,
  },
});

const Breadcrumb = ({ pageName }) => (
  <View style={styles.container}>
    <StepIndicator
      customStyles={stepIndivatorStyles}
      currentPosition={currentPosition[pageName]}
      stepCount={stepLabels.length}
      labels={stepLabels}
    />
  </View>
);

export default Breadcrumb;

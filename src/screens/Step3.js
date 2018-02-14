import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blueviolet',
  },
});

const Step3 = ({ navigation }) => (
  <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('step1')}>
    <Text>Step3</Text>
  </TouchableOpacity>
);

Step3.navigationOptions = {
  title: 'Step3',
};

export default Step3;

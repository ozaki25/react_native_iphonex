import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightsteelblue',
  },
});

const Step1 = ({ navigation }) => (
  <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('step2')}>
    <Text>Step1</Text>
  </TouchableOpacity>
);

Step1.navigationOptions = {
  title: 'Step1',
};

export default Step1;

import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
  },
});

const Step2 = ({ navigation }) => (
  <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('step3')}>
    <Text>Step2</Text>
  </TouchableOpacity>
);

Step2.navigationOptions = {
  title: 'Step2',
  header: null,
};

export default Step2;

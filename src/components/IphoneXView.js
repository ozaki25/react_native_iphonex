import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const IphoneXView = ({ navigation }) => (
  <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('normal')}>
    <Text>IphoneXView</Text>
  </TouchableOpacity>
);

IphoneXView.navigationOptions = {
  title: 'IphoneXView',
};

export default IphoneXView;

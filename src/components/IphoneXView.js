import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  contents: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const IphoneXView = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <TouchableOpacity style={styles.contents} onPress={() => navigation.navigate('normal')}>
      <Text>IphoneXView</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

IphoneXView.navigationOptions = {
  title: 'IphoneXView',
};

export default IphoneXView;

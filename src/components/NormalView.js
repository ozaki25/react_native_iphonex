import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
  contents: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const NormalView = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.contents} onPress={() => navigation.navigate('iphonex')}>
      <Text>
        NormalView
        <Icon name="md-alert" size={30} color="#900" />
      </Text>
    </TouchableOpacity>
  </View>
);

NormalView.navigationOptions = {
  title: 'NormalView',
};

export default NormalView;

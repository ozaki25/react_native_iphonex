import React from 'react';
import { Button, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Dialog } from 'react-native-simple-dialogs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const NormalView = ({ navigation }) => (
  <React.Fragment>
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('iphonex')}>
      <Text>NormalView</Text>
    </TouchableOpacity>

    <Dialog
      title="タイトル"
      buttons={<Button title="ボタン" color="blue" onPress={() => {}} />}
      overlayStyle={{ paddingHorizontal: 10 }}
      contentStyle={{
        backgroundColor: 'lightblue',
        height: Dimensions.get('window').height - 150,
        paddingHorizontal: 10,
      }}
      visible
    >
      <ScrollView>
        {[...Array(3)].map((_, i) => (
          <Text key={i}>
            ダイアログダイアログダイアログダイアログダイアログダイアログダイアログ
          </Text>
        ))}
      </ScrollView>
    </Dialog>
  </React.Fragment>
);

NormalView.navigationOptions = {
  title: 'NormalView',
};

export default NormalView;

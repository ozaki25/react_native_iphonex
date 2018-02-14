import React from 'react';
import { SafeAreaView } from 'react-native';
import AppNavigator from './src/navigators/AppNavigator';
import Breadcrumb from './src/components/Breadcrumb';

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Breadcrumb pageName="step1" />
    <AppNavigator />
  </SafeAreaView>
);

export default App;

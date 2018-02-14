import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Step1 from '../screens/Step1';
import Step2 from '../screens/Step2';
import Step3 from '../screens/Step3';
import NormalView from '../screens/NormalView';
import IphoneXView from '../screens/IphoneXView';

const AppNavigtor = StackNavigator(
  {
    step1: { screen: Step1 },
    step2: { screen: Step2 },
    step3: { screen: Step3 },
    normal: { screen: NormalView },
    iphonex: { screen: IphoneXView },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'honeydew',
        elevation: 0,
        // top: 89,
        // marginTop: Platform.OS === 'ios' ? 30 : 50,
        // paddingBottom: Platform.OS === 'ios' ? 20 : 0,
        borderBottomWidth: 3.5,
        borderBottomColor: 'skyblue',
      },
    },
  },
);

export default AppNavigtor;

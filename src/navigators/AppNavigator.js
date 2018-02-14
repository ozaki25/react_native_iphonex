import { StackNavigator } from 'react-navigation';
import NormalView from '../screens/NormalView';
import IphoneXView from '../screens/IphoneXView';

const AppNavigtor = StackNavigator({
  normal: { screen: NormalView },
  iphonex: { screen: IphoneXView },
});

export default AppNavigtor;

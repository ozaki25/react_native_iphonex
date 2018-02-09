import { StackNavigator } from 'react-navigation';
import NormalView from '../components/NormalView';
import IphoneXView from '../components/IphoneXView';

const AppNavigtor = StackNavigator({
  normal: { screen: NormalView },
  iphonex: { screen: IphoneXView },
});

export default AppNavigtor;

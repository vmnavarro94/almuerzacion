import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { Meals, Modal, Login, Register } from './screens';

const OnBoardingNavigator = createStackNavigator({
  Login,
  Register
}, {
  initialRouteName: 'Login'
}) 

const AppNavigator = createStackNavigator({
  Meals: {
    screen: Meals,
  },
}, {
  initialRouteName: 'Meals',
})

const RootStack = createStackNavigator({
  Main: AppNavigator,
  Modal,
}, {
  mode: 'modal',
  headerMode: 'none'
})

const BaseStack  = createSwitchNavigator({
  OnBoarding: OnBoardingNavigator,
  Root: RootStack,
}, {
  initialRouteName: 'OnBoarding'
})

export default createAppContainer(BaseStack)


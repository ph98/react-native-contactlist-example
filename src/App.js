/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'

import {I18nManager } from 'react-native'
import commonColor from './native-base-theme/variables/commonColor'
import {Text , StyleProvider } from 'native-base'
import getTheme from './native-base-theme/components'

import {createDrawerNavigator , createAppContainer} from 'react-navigation'

// pages: 
import {MainPage} from './pages/MainPage'

I18nManager.forceRTL(false)
I18nManager.allowRTL(false)

const DrawerNvigator = createDrawerNavigator({ 
  MainPage
} , { 
  drawerPosition : 'right',
})

const MainNavigator = createAppContainer(DrawerNvigator)
export default class App extends Component{
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)} >
        <MainNavigator />
      </StyleProvider>
    )
  }
}
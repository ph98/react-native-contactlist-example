/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'

import { I18nManager } from 'react-native'
import commonColor from './native-base-theme/variables/commonColor'
import {StyleProvider,Root } from 'native-base'
import getTheme from './native-base-theme/components'

import {createDrawerNavigator , createAppContainer, createSwitchNavigator} from 'react-navigation'

import {SideBar} from './components/'

// pages: 
import {MainPage , LoadingPage , SignUpPage , LoginPage , AboutUsPage} from './pages'
I18nManager.forceRTL(false)
I18nManager.allowRTL(false)



const DrawerNvigator = createDrawerNavigator({ 
	MainPage , 
	AboutUsPage
} , { 
	drawerPosition : 'right', 
	contentComponent : SideBar
})

const AuthNavigator = createSwitchNavigator({
	LoadingPage ,
	SignUpPage ,
	LoginPage , 
	DrawerNvigator
} , { 
	initialRouteName :'LoadingPage' ,
	backBehavior :'initialRoute'
})

const MainNavigator = createAppContainer(AuthNavigator)
export default class App extends Component{
	render() {
		return (
			<StyleProvider style={getTheme(commonColor)} >
				<Root>
					<MainNavigator />
				</Root>
			</StyleProvider>
		)
	}
}
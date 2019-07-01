import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {createStackNavigator} from 'react-navigation'


// pages : 
import {ContactListPage} from '../ContactList'
import {ContactPage} from '../Contact'
import {AddContactPage} from '../AddContact'
const MainStack = createStackNavigator({
	ContactListPage , 
	ContactPage , 
	AddContactPage
} , { 
	headerMode : 'none'
})


export default MainStack

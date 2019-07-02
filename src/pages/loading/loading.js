import React, { Component } from 'react'
import { View } from 'react-native'
import { Text, Spinner } from 'native-base'
import { Colors } from '../../config'

import AsyncStorage from '@react-native-community/async-storage'
import Axios from 'axios'
import { server } from '../../config'
export class LoadingPage extends Component {
	async componentDidMount() {

		Axios.defaults.baseURL = server
		const token = await AsyncStorage.getItem('Token')
		if(token){
			Axios.defaults.headers = {
				Authorization: 'Token ' + token
			}
			this.props.navigation.navigate('MainPage')
		}else{

			Axios.defaults.headers = {

			}
			this.props.navigation.navigate('LoginPage')				
		}
	}

	render() {
		return (
			<View style={{justifyContent :'center' ,flex:1}}>
				<Spinner color={Colors.primary}/>
				<Text style={{textAlign:'center' , color :Colors.primary}}>
					لطفا کمی صبر کنید!
				</Text>
			</View>
		)
	}
}

export default LoadingPage

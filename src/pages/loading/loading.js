import React, { Component } from 'react'
import { View } from 'react-native'
import { Text, Spinner } from 'native-base'
import { Colors } from '../../config'

import AsyncStorage from '@react-native-community/async-storage'
export class LoadingPage extends Component {
	state = { 
		loading : true , 
	}

	componentDidMount() {
		AsyncStorage.getItem('Token' , token => { 
			console.log(token)
			if(token){
				this.props.navigation.navigate('MainPage')
			}else{
				this.props.navigation.navigate('LoginPage')				
			}
		})
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

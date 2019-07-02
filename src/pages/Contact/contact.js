import React, { Component } from 'react'
import { View , Image ,Dimensions,TouchableOpacity,Linking } from 'react-native'
import { Text,Spinner, Card, CardItem, Icon } from 'native-base'
import {Header} from '../../components/'
import Axios from 'axios'

const {width , height} = Dimensions.get('screen')
export class ContactPage extends Component {

	state = { 
		loading : true , 
		data : {} , 

	}

	fetchData(id) { 
		console.log(id)
		Axios.get('contacts/' + id ).then(({data})=>{
			console.log(data)
			this.setState({data , loading : false})
		})
	}
	render() {
		const { navigation } = this.props
		const id = navigation.getParam('id', '0')
		
		this.state.loading && this.fetchData(id)
		return (
			<View>
				<Header title='اطلاعات مخاطب' back />
				{ 
					this.state.loading ? 
						<Spinner /> : 
						<View>
							<Image style={{width:width , height:width }} source={{uri : this.state.data.image}} />
							{/* <Text>{JSON.stringify(this.state.data)}</Text> */}
							<Card>
								<CardItem>
									<Icon name='person'/>

									<Text>{this.state.data.first_name +' ' + this.state.data.last_name}</Text>
								</CardItem>
								<CardItem>
									<TouchableOpacity style={{flex:1 , flexDirection:'row'}} onPress={_=>{
										Linking.openURL('tel://' + this.state.data.phone_number )
									}}>
										<Icon name='call'/>
										<Text>{this.state.data.phone_number}</Text>
									
									</TouchableOpacity>
								</CardItem>

								<CardItem>
									<Icon name='information' />
									<Text>جهت برقراری تماس روی شماره کلیک کنید!</Text>
								</CardItem>
							</Card>
						</View>
				}
			</View>
		)
	}
}

export default ContactPage

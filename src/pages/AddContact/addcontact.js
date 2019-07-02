import React, { Component } from 'react'
import { View,TouchableOpacity , StyleSheet } from 'react-native'
import { Header } from '../../components/'
import {Text, Content, Thumbnail, Form, Item, Input, Button, Spinner, Icon, Toast} from 'native-base'
import ImagePicker from 'react-native-image-picker'
import Axios from 'axios'



const options = {
	title: 'انتخاب تصویر',
	storageOptions: {
		skipBackup: true,
		path: 'images',
	},
}
export class AddContactPage extends Component {
	state = {
		loading : false ,
		first_name:'' ,
		last_name: '',
		phone_number:'' ,
		image: null
	}
	save(){
		this.setState({loading : true})

		let fd = new FormData()
		
		fd.append('first_name' , this.state.first_name)
		fd.append('last_name' , this.state.last_name)
		fd.append('phone_number' , this.state.phone_number)
		this.state.image && fd.append('image' , 
			{
				name: this.state.image.fileName,
				type: this.state.image.type,
				uri: this.state.image.uri
			})
		console.log(fd)
		Axios.post('contacts/' , fd ).then( data=>{
			console.log(data)
			Toast.show({
				type :'success' , 
				text : 'مخاطب افزوده شد!'
			})
			this.props.navigation.pop()
		}).catch(err=>{
			console.log(err)
		}).finally( _=>{ 
			this.setState({loading : false })
		})
	}

	pickImage(){
		
		/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info in the API Reference)
 */
		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response)
  
			if (response.didCancel) {
				console.log('User cancelled image picker')
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error)
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton)
			} else {

				// You can also display the image using data:
				// const source = { uri: 'data:image/jpeg;base64,' + response.data };

				this.setState({
					image: response,
				})
			}
		})
	}
	render() {
		return (
			<View style={{flex:1}}>
				<Header title='افزودن مخاطب' back/>

				<Content>
					<View style={{flex:1 , justifyContent:'center' , alignContent :'center' , alignItems:'center'}}>
						<TouchableOpacity onPress={_=>{
							this.pickImage()
						}}>
							<Thumbnail 
								style={{width:100 , height:100 , borderRadius:100 , margin:20}} 
								source={ this.state.image ? this.state.image : {uri : 'http://www.gravatar.com/avatar/?d=mm'}} 
							/>
						</TouchableOpacity>
					
					</View>
					<Form style={{flex:1 , padding:20 }}>
						<Item rounded style={styles.input} >
							<Input value={this.state.first_name} onChangeText={val=>this.setState({first_name : val})} placeholder="نام " />
						</Item>
						<Item rounded style={styles.input} last>
							<Input value={this.state.last_name} onChangeText={val=>this.setState({last_name : val})} placeholder="نام خانوادگی" />
						</Item>

						<Item rounded style={styles.input} last>
							<Input value={this.state.phone_number} onChangeText={val=>this.setState({phone_number : val})} keyboardType='name-phone-pad' placeholder="شماره تماس" />
						</Item>
						{
							this.state.loading ? 
								<Spinner /> : 
								<Button full rounded onPress={ _=>{
									this.save()
								}}>
									<Icon name='add' />
									<Text> ذخیره</Text>
								</Button>
						}
					</Form>
				</Content>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	input : { margin: 10}
})

export default AddContactPage

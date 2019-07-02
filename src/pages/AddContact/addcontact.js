import React, { Component } from 'react'
import { View,TouchableOpacity , StyleSheet } from 'react-native'
import { Header } from '../../components/'
import {Text, Content, Thumbnail, Form, Item, Input, Button, Spinner, Icon} from 'native-base'

export class AddContactPage extends Component {
	state = {
		loading : false , 
		pic : {}
	}

	pickImage(){

	}
	render() {
		return (
			<View style={{flex:1}}>
				<Header title='افزودن مخاطب' back/>

				<Content>
					<View style={{flex:1 , justifyContent:'center' , alignContent :'center' , alignItems:'center'}}>
						<TouchableOpacity onPress={_=>{

						}}>
							<Thumbnail 
								style={{width:100 , height:100 , borderRadius:100 , margin:20}} 
								source={{uri : 'http://www.gravatar.com/avatar/?d=mm'}} 
							/>
						</TouchableOpacity>
					
					</View>
					<Form style={{flex:1 , padding:20 }}>
						<Item rounded style={styles.input} >
							<Input placeholder="نام کاربری" />
						</Item>
						<Item rounded style={styles.input} last>
							<Input placeholder="پسورد" />
						</Item>
						{
							this.state.loading ? 
								<Spinner /> : 
								<Button full rounded onPress={ _=>{
									this.login()
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

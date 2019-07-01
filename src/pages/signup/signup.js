import React, { Component } from 'react'
import { View , StyleSheet } from 'react-native'
import { Container, Header, Content, Form, Item, Input , Text ,Button, Icon, Spinner, Toast} from 'native-base'
import { Colors, server } from '../../config'
import Axios from 'axios'

export class SignUpPage extends Component {

	state = { 
		user : '' , 
		pass : '' , 
		loading : false 
	}
	SignUp(){
		this.setState({loading :true})
		Axios.post(server + '/auth' , { username : this.state.user , password : this.state.pass}).then( ({data}) => {
			console.log(data)
			Toast.show({
				type :'success' , 
				text :'با موفقیت وارد سیستم شدید.' 
			})
		}).catch(err=>{
			console.log(err)
			Toast.show({
				type :'danger' , 
				text :'نام کاربری یا پسورد شما اشتباه است!' 
			})
		}).finally( _=>{
			this.setState({loading : false})
		})
	}
	render() {
		return (
			<Container style={{flex:1 , backgroundColor :Colors.light}}> 
				<Content>

					<Text style={{textAlign:'center' , fontFamily :'IRANSansMobile(FaNum)_Bold' , color :Colors.primary , padding:50 , fontSize:30}}> ثبت نام در سیستم </Text>
					<Form style={{justifyContent :'center' , padding:40}}>
						<Item rounded style={styles.item}>
							<Input style={styles.input} placeholder="نام" />
						</Item>
						<Item rounded style={styles.item}>
							<Input style={styles.input} placeholder="نام خانوادگی" />
						</Item>
						<Item rounded style={styles.item}>
							<Input style={styles.input} keyboardType='number-pad' placeholder="شماره تلفن" />
						</Item>
						<Item rounded style={styles.item}>
							<Input style={styles.input} placeholder="نام کاربری" />
						</Item>

						<Item rounded style={styles.item} last>
							<Input style={styles.input} secureTextEntry placeholder="پسورد" />
						</Item>
						{
							this.state.loading ? 
								<Spinner color={Colors.primary} /> : 
								<Button style={styles.button} full rounded  onPress={ _=>{
									this.SignUp()
								}}>
									<Icon name='person-add' />
									<Text> ثبت نام </Text>
								</Button>
						}
						<Button style={styles.button} full rounded bordered onPress={ _=>{
							this.props.navigation.navigate('LoginPage')
						}}>
							<Icon name='person' />
							<Text> ورود به سیستم</Text>
						</Button>
						
					</Form>
				</Content>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	item : { margin :10 ,borderColor:Colors.dark , paddingRight:10 } , 
	input : { fontFamily :'IRANSansMobile(FaNum)'} , 
	button : {margin:10}
})
export default SignUpPage

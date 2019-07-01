import React, { Component } from 'react'
import { View , TouchableOpacity } from 'react-native'
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch ,Button} from 'native-base';
import { Colors } from '../../config'
export class SideBarComponent extends Component {

	pages = [
		{ name : 'صفحه اصلی' , icon : 'home' , route :'MainPage'} ,
		{ name : 'افزودن مخاطب' , icon : 'add' , route :'AddContactPage'} ,
		{ name : 'درباره ما' , icon : 'info' , route :'AboutUs'} ,
		{ name : 'خروج' , icon : 'logout' , route :'Logout'} ,

	]
	render() {
		return (
			<Content>
				<Header style={{height : 100 , justifyContent :'center' , alignContent:'center'  , alignItems :'center' }}>
					<Text style={{color :Colors.light , fontFamily :'IRANSansMobile(FaNum)_Bold'}}>دفترچه تماس من</Text>
				</Header>
				{this.pages.map(item=>(
						<ListItem onPress={_=>{
							if(item.route == 'Logout'){
								// remove token and exit 
								
								this.props.navigation.navigate('LoginPage')								
							}
							this.props.navigation.navigate(item.route)
							
						}} icon>
							<Left>
							<Button style={{ backgroundColor: Colors.secondary }}>
								<Icon active name={item.icon} />
							</Button>
							</Left>
							<Body >
								<Text style={{ textAlign :'right'}}>{item.name}</Text>
							</Body>
						</ListItem>
				))}
			</Content>
		)
	}
}

export default SideBarComponent

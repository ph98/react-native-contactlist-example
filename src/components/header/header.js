import React, { Component } from 'react'
import {  View } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import {withNavigation} from 'react-navigation'
import {Colors} from '../../config'


export class HeaderComponent extends Component {
	render() {
		return (
			<Header style={{backgroundColor :Colors.primary , flexDirection: 'row-reverse'}}>
				<Left >
					<Button transparent style={{alignSelf:'flex-end'}} onPress={ _=> {
						this.props.navigation.toggleDrawer()
					}}>
						<Icon name='menu' />
					</Button>
				</Left>
				<Body style={{ flex:1 , justifyContent : 'center' , flexDirection:'row-reverse'}}>
					<Title style={{textAlign : 'center', flex:1}}>{ this.props.title ? this.props.title : 'Header' }</Title>
				</Body>
				<Left style={{}}>
					{
						this.props.back && 
							<Button transparent onPress={ _=>{
								this.props.navigation.pop()
							}}>
								<Icon name='arrow-back' />
							</Button>
					}
				</Left>
			</Header>
		)
	}
}

export default withNavigation(HeaderComponent)
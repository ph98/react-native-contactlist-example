import React, { Component } from 'react'
import { View ,FlatList } from 'react-native'
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import {Header} from '../../components/header'
export class ContactListPage extends Component {
	render() {
		return (
			<Container>
				<Header title='لیست مخاطبین شما' />
				<Content>
					<List>
						<ListItem thumbnail>
						<Left>
							{/* <Thumbnail square source={{ uri: 'Image URL' }} /> */}
						</Left>
						<Body>
							<Text>Sankhadeep</Text>
							<Text note numberOfLines={1}>Its time to build a difference . .</Text>
						</Body>
						<Right>
							<Button transparent>
							<Text>View</Text>
							</Button>
						</Right>
						</ListItem>
					</List>
				</Content>
			</Container>
		)
	}
}

export default ContactListPage

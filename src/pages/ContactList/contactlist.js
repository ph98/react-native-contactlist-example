import React, { Component } from 'react'
import { View, TouchableOpacity  ,FlatList } from 'react-native'
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon , Fab} from 'native-base'
import {Header} from '../../components/header'
import { Colors } from '../../config'
export class ContactListPage extends Component {
	state = {
		data : [12,3,31,5,123,12312313,123,12,31,23,12,312,3,123,12,321]
	}
	componentDidMount(){
		// Axois.get()
	}
	render() {
		return (
			<Container>
				<Header title='لیست مخاطبین شما' />
				<View style={{flex:1}}>

					<FlatList 
						data={this.state.data} 
						keyExtractor={item=>'n' + item}
						renderItem={item=>(
							<ListItem thumbnail>
								<Left>
									<Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNj6gNL3_ywCjBPOsZgwwoneojOhdatg3Tr6PtCCCLVFRZbefEA' }} />
								</Left>
								<Body>
									<Text style={{textAlign :'right' }}>Sankhadeep</Text>
									<Text style={{textAlign :'right' , direction:'rtl' }} note numberOfLines={1}>متن آزمایشی طولانی این متن ادامه دارد</Text>
								</Body>
								<Right style={{ padding:10 }}>
									<Button icon rounded onPress={ _=>this.props.navigation.navigate('ContactPage' , { id : item})}>
										<Icon name='call' />
									</Button>
								</Right>
							</ListItem>
						)}	
					/>
					<Fab
						style={{ backgroundColor: Colors.secondary }}
						position="bottomRight"
						onPress={() => this.props.navigation.navigate('AddContactPage') }>
						<Icon name="add" />
					</Fab>
				</View>

			</Container>
		)
	}
}

export default ContactListPage

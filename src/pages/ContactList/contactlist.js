import React, { Component } from 'react'
import { View, TouchableOpacity  ,FlatList } from 'react-native'
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon , Fab} from 'native-base'
import {Header} from '../../components/header'
import { Colors } from '../../config'
import Axios from 'axios'
export class ContactListPage extends Component {
	state = {
		data : []
	}
	componentDidMount(){
		Axios.get('contacts/').then(({data})=>{
			console.log(data)
			this.setState({data})
		})
	}
	render() {
		console.log(this.state.data.length)
		return (
			<Container>
				<Header title='لیست مخاطبین شما' />
				<View style={{flex:1}}>
					{
						this.state.data.length > 0 ? 
							<FlatList 
								data={this.state.data} 
								keyExtractor={item=>'n' + item.id}
								renderItem={({item})=>(
									<ListItem thumbnail>
										<Left>
											<Thumbnail square source={{ uri: item.image ? item.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNj6gNL3_ywCjBPOsZgwwoneojOhdatg3Tr6PtCCCLVFRZbefEA' }} />
										</Left>
										<Body>
											<Text style={{textAlign :'right' }}>{item.first_name}</Text>
											<Text style={{textAlign :'right' , direction:'rtl' }} note numberOfLines={1}>{item.last_name}</Text>
										</Body>
										<Right style={{ padding:10 }}>
											<Button icon rounded onPress={ _=>this.props.navigation.navigate('ContactPage' , { id : item.id})}>
												<Icon name='call' />
											</Button>
										</Right>
									</ListItem>
								)}	
							/>

							: 
							<Text> موردی یافت نشد! لطفا مخاطبین خود را اضافه کنید! </Text>
					}
					
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

import React, { Component } from 'react'
import {  View } from 'react-native'
import {Text , Card , CardItem} from 'native-base'
export class AboutUs extends Component {
	render() {
		return (
			<View>
				<Card>
					<CardItem>
						<Text>ساخته شده با ری اکت نیتیو</Text>
					</CardItem>
				</Card>
			</View>
		)
	}
}

export default AboutUs

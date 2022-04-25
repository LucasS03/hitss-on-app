// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CardTitleDescription(props) {
  return (
    <View style={styles.containerCard}>
			<View style={styles.contentCard}>
				<Text style={styles.cardTitle}>
					{props.title}
				</Text>
				<Text style={styles.cardDescription}
					numberOfLines={2}
					ellipsizeMode='tail'>
						{props.description}
				</Text>
			</View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCard: {
		paddingVertical: 0,
		paddingHorizontal: 20,
		paddingBottom: 20
  },
	contentCard: {
		backgroundColor: '#fff',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,

		elevation: 9,
	},
	cardTitle: {
		color: '#444',
		fontSize: 22
	},
	cardDescription: {
		color: '#444',
		fontSize: 16
	}
  
});

import React from 'react';
import { View, Button, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function AccordionDefault({ children, title }) {
  const [isOpen, toggle] = React.useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<TouchableHighlight style={styles.button}
					underlayColor='#888'
					onPress={() => toggle(!isOpen)}
				>
					<Text style={styles.textButton}>{title}</Text>
				</TouchableHighlight>

				{ isOpen &&
					<View style={styles.contentAccordion}>
						{children}
					</View> 
				}
			</View>
		</View>
  );
}

const styles = StyleSheet.create({
  container: {
		paddingVertical: 0,
		paddingHorizontal: 20,
		paddingBottom: 20,
  },
	title: {
		width: '100%',
		backgroundColor: '#888',
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
	button: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 20
	},
	textButton: {
		color: '#fff',
		fontSize: 22
	},
	contentAccordion: {
		backgroundColor: '#fff',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
});



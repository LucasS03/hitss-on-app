// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ButtonDefault from './Button';

export default function CardTitleDescription(props) {
	const [ numOfLines, setNumOfLines ] = React.useState(2);
	const [ showMore, setShowMore ] = React.useState(false);
	const [ open, setOpen ] = React.useState(false);
	const [ lines, setLines ] = React.useState(0);

	const onTextLayout = React.useCallback(e => {
    setShowMore(e.nativeEvent.lines.length > numOfLines);
		setLines(e.nativeEvent.lines.length);
  }, []);

	const fullText = () => {
		if(open) {
			setNumOfLines(2);
			setOpen(false);
		} else {
			setNumOfLines(lines);
			setOpen(true);
		}
	}

  return (
    <View style={styles.containerCard}>
			<View style={styles.contentCard}>
				<Text style={styles.cardTitle}>
					{props.title}
				</Text>
				<Text style={styles.cardDescription}
					numberOfLines={numOfLines}
					onTextLayout={onTextLayout}
					ellipsizeMode='tail'>
						{props.description}
				</Text>
				
				{showMore ?
					<ButtonDefault onPress={fullText}>
						{open ? "Mostrar menos" : "Mostrar mais"}
					</ButtonDefault> :
					<></>
				}
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
		fontSize: 16,
		marginBottom: 10
	}
});

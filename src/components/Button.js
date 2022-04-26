import React from 'react';
import { Button } from 'react-native';

export default function ButtonDefault(props) {
  return (
    <Button
			onPress={props.onPress}
			title={props.children}
			color="#888"
		/>
  );
}
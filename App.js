import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import CardTitleDescription from './src/components/CardTitleDescription';
import coursesApi from './services/courses';
import AccordionDefault from './src/components/Accordion';

export default function App() {
  
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    coursesApi.getCourses().then((resp) => {
      setCourses(resp);
    })
  }, []);

  const renderItem = ({ item }) => (
    <CardTitleDescription 
      title={item.title}
      description={item.description}>
    </CardTitleDescription> 
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.textAppBar}>HitssOn</Text>
      </View>

      <AccordionDefault title="MEU NOME É">
        <Text style={styles.textDescription}>SAMUEL LUCAS DA SILVA SENA SAMUEL LUCAS DA SILVA SENA SAMUEL LUCAS DA SILVA SENA SAMUEL LUCAS DA SILVA SENA SAMUEL LUCAS DA SILVA SENA SAMUEL LUCAS DA SILVA SENA SAMUEL LUCAS DA SILVA SENA SAMUEL LUCAS DA SILVA SENA SAMUEL LUCAS DA SILVA SENA SAMUEL LUCAS DA SILVA SENA</Text>
      </AccordionDefault>

      <CardTitleDescription 
        title="MEU NOME É"
        description="SAMUEL LUCAS DA SILVA SENA SAMUEL LUCAS DA SILVA SENA SAMUEL LUCAS DA SILVA SENA SAMUEL LUCAS DA SILVA SENA SAMUEL LUCAS DA SILVA SENA SAMUEL LUCAS DA SILVA SENA SAMUEL LUCAS DA SILVA SENA SAMUEL LUCAS DA SILVA SENA SAMUEL LUCAS DA SILVA SENA SAMUEL LUCAS DA SILVA SENA">
      </CardTitleDescription> 

      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  appBar: {
    display: 'flex',
    justifyContent: 'center',
    height: 80,
    backgroundColor: '#888',
    marginBottom: 20,
    paddingHorizontal: 20
  },
  textAppBar: {
    color: '#fff',
    fontSize: 22
  },
  textDescription: {
    color: '#444',
		fontSize: 16,
  }
});

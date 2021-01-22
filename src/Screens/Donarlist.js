import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import database from '@react-native-firebase/database';


const Donarlist = ({navigation}) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({

      headerTitle: (props) => (
        <Text {...props} style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          Blood Bank
        </Text>
      ),
      headerStyle: {
        backgroundColor: "red",
      },
    });
  }, [navigation]);


  const [name, setName] = useState('');
  const [group, setGroup] = useState('');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');

  let user = {
    name,
    group,
    contact,
    location,
  }

  const register = ()=>{
    database()
    .ref('/').push(user)
    .then(() => {
      console.log('Data pushed.==>',user);
      navigation.navigate('Main');
    });
    }
  

  return (
    <>
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.sucess}>Register</Text>
        <TextInput
          placeholder="Enter your Name"
          type="text"
          style={styles.inputs}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          placeholder="Enter your Blood group"
          type="text"
          style={styles.inputs}
          value={group}
          onChangeText={(text) => setGroup(text)}
        />
        <TextInput
          placeholder="Enter your Contact"
          type="text"
          style={styles.inputs}
          value={contact}
          onChangeText={(text) => setContact(text)}
        />
        <TextInput
          placeholder="Enter your Location"
          type="text"
          style={styles.inputs}
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
        <TouchableOpacity
          onPress={register}
          activeOpacity={0.5}
          style={styles.Button}>
          <Text style={styles.btntext}>Register</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  sucess:{
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  Button: {
    backgroundColor: 'red',
    width: '70%',
    padding: 10,
    marginBottom: 30,
  },
  btntext: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  inputs: {
    margin: 20,
    height: 60,
    width: '80%',
    borderColor: 'red',
    borderWidth: 2,
    padding: 10,
    fontSize: 25,
  },
});

export default Donarlist;

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


const Main = ({navigation}) => {

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


  const needblood = ()=>{
    navigation.navigate('Donarlist');
  }

  const donateblood = ()=>{
    navigation.navigate('Centerlist');
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.mainheading}>Welcome User</Text>
        <TouchableOpacity
          onPress={needblood}
          activeOpacity={0.5}
          style={styles.Button}>
          <Text style={styles.btntext}>Need Blood</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={donateblood}
          activeOpacity={0.5}
          style={styles.Button}>
          <Text style={styles.btntext}>Donate Blood</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  mainheading:{
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 30,
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
    margin: 20,
  },
  btntext: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  inputs: {
    margin: 10,
    height: 40,
    width: '80%',
    borderColor: 'red',
    borderWidth: 2,
    padding: 10,
  },
});

export default Main;

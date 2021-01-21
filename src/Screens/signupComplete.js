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


const Signup = ({navigation}) => {

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


  const back = ()=>{
    navigation.navigate('login');
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.sucess}>Account Created Sucessfully.</Text>
  
        <TouchableOpacity
          onPress={back}
          activeOpacity={0.5}
          style={styles.Button}>
          <Text style={styles.btntext}>Go Back to Login</Text>
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
  sucess:{
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 100,
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
  },
  btntext: {
    color: 'white',
    fontSize: 20,
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

export default Signup;

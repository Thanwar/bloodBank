import React, {useState} from 'react';
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
import auth from '@react-native-firebase/auth';

const Signup = ({navigation}) => {
  const [user, setuser] = useState('');
  const [pass, setpass] = useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <Text
          {...props}
          style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          Blood Bank
        </Text>
      ),
      headerStyle: {
        backgroundColor: 'red',
      },
    });
  }, [navigation]);

  const signup = () => {
    console.log('user==>', user);
    console.log('pass==>', pass);
    auth()
      .createUserWithEmailAndPassword(
        user,
        pass,
      )
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Signupcomplete');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.mainheading}>Sign UP</Text>
        <TextInput
          placeholder="Enter your email"
          type="email"
          style={styles.inputs}
          value={user}
          onChangeText={(text) => setuser(text)}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Enter your password"
          type="password"
          style={styles.inputs}
          value={pass}
          onChangeText={(text) => setpass(text)}
        />
        <TouchableOpacity
          onPress={signup}
          activeOpacity={0.5}
          style={styles.Button}>
          <Text style={styles.btntext}>Sign Up</Text>
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
  mainheading: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
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

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


const Login = ({navigation}) => {
  const [user, setuser] = useState('');
  const [pass, setpass] = useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <Text {...props} style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          Blood Bank
        </Text>
      ),
      headerStyle: {
        backgroundColor: 'red',
      },
    });
  }, [navigation]);

  const login = () => {
    console.log('user==>', user);
    console.log('pass==>', pass);
    auth().signInWithEmailAndPassword(user, pass)
        .then((result)=>{
        // console.log(result)
        console.log("Login sucessfully..")
        navigation.navigate('Main');
        })
        .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorMessage)
        });
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.mainheading}>Sign In</Text>
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
          onPress={login}
          activeOpacity={0.5}
          style={styles.Button}>
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.text}>or</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}
          activeOpacity={0.5}
          style={styles.Button}>
          <Text style={styles.btntext}>Create New Account</Text>
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
    fontSize: 60,
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

export default Login;

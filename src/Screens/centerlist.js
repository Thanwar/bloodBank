import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import database from '@react-native-firebase/database';

const CenterList = ({navigation}) => {
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

  const [data, setdata] = useState({});
  const [user, setuser] = useState('');
  const [loading, setloading] = useState(true);
  const [list, setlist] = useState([]);

  useEffect(() => {
    database()
      .ref('/')
      .once('value')
      .then((snapshot) => {
        console.log('User data: ', snapshot.val());
        let temp = snapshot.val();
        let temp2 = Object.entries(temp);
        setdata(temp2);
        setuser(Object.keys(temp));
        setloading(false);
        let templist = [];
        for (var i = 0; i < user.length; i++) {
          templist.push(
            <View>
              {data &&
                data[i].map((users) => (
                  <View>
                    <Text style={styles.listofdonar}>{users.name}</Text>
                    <Text style={styles.listofdonar}>{users.group}</Text>
                    <Text style={styles.listofdonar}>{users.contact}</Text>
                    <Text style={styles.listofdonar}>{users.location}</Text>
                  </View>
                ))}
            </View>,
          );
        }
        console.log('Useeffect keys===============>', templist);
        setlist(templist);
      });
  }, []);

  const back = () => {
    // navigation.navigate('login');
    // let user = data.map(users=>users.name)
    // console.log("pressed===>",user[0].name);
    // console.log(data);
    // console.log(data[0].map(users=>users));

    console.log('pressed keys===============>', list);
  };

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <>
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.sucess}>List of Donars</Text>
        <View>{list}</View>
        <TouchableOpacity
          onPress={back}
          activeOpacity={0.5}
          style={styles.Button}>
          <Text style={styles.btntext}>Refrdfgesh</Text>
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
  sucess: {
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
  listofdonar: {
    fontSize: 30,
  },
  cards: {
    backgroundColor: "red",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});

export default CenterList;

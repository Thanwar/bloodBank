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

// let templist = [];
// for (var i = 0; i < user.length; i++) {
//   templist.push(
//     <View style={styles.cards}>
//       { data.map(users => (
//           <View key={"users"+i} style={styles.listofdonar}>
//             <Text>value of {i}</Text>
//             <Text>{users.name}</Text>
//             <Text>{users.group}</Text>
//             <Text>{users.contact}</Text>
//             <Text>{users.location}</Text>
//           </View>
//         )
//         )}
//     </View>,
//   )
// }

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

  const [data, setdata] = useState([]);
  const [user, setuser] = useState('');
  const [loading, setloading] = useState(true);
  const [list, setlist] = useState([]);

  useEffect(() => {
    database()
      .ref('/')
      .once('value')
      .then((snapshot) => {
        console.log('User data: ', snapshot.val());
        let temp = snapshot.val() ? snapshot.val() : {};
        let temp2 = Object.entries(temp);
        setdata(temp);
        setuser(Object.keys(temp));
        console.log('Useeffect keys===============>', data);

        let obj = Object.fromEntries(temp2);
        let obj2 = Object.values(obj);
        // setuser(obj);

        // const templist = [];
        // obj2.map((product) => {
        //   templist.push(product);
        // });

        setloading(false);
      });
  }, [loading]);

  const back = () => {
    // navigation.navigate('login');
    // let user = data.map(users=>users.name)
    // console.log("pressed===>",user[0].name);
    // console.log(list);
    // console.log(data[0].map(users=>users));

    console.log('pressed keys===============>', data);
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
          <View style={styles.cards}>
          <Text style={styles.listofdonar}>{JSON.stringify(data)}</Text>
          </View>
          <View>
            {/* <Text>{user.map((users) => users.name)}</Text> */}
          </View>
          <TouchableOpacity
            onPress={back}
            activeOpacity={0.5}
            style={styles.Button}>
            <Text style={styles.btntext}>Refresh</Text>
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
    marginBottom:50,
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
    fontSize: 40,
    margin: 10,
    padding: 10,
  },
  cards: {
    margin: 10,
  },
});

export default CenterList;

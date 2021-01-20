/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>
          Hello React Native
        </Text>
        {/* <TouchableOpacity>
        <Text style={styles.Button}>
          Button
        </Text>
        </TouchableOpacity> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',

  },
  Button:
  {
    backgroundColor: "blue",
    width: 200,
    textAlign: 'center',
    fontSize: 30,
    color: "white",
  }
});

export default App;

import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Dheenadhayalan</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(0,255,255,0.5)" />
      <EditScreenInfo path="My dear Dheena, Please quickly finish Danny's pamphlet work!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'yellow',
  },
  separator: {
    marginVertical: 20,
    height: 0.5,
    width: '80%',
  },
});

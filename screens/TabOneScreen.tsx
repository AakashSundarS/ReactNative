import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Arunachalam</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(0,255,255,0.5)" />
      <EditScreenInfo path="My dear Aruna,
      Even my 7 year old laptop can do this, if yours can't, then you just go f*** yourself" />
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
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

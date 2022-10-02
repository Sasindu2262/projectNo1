/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react native';

const HomeFC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Thid id Home class</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

export default HomeFC;

import React, { Component } from 'react';
import { enableScreens } from 'react-native-screens';

enableScreens();


import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Routes from './routes';


const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  red: {
    color: 'red',
  },
});

export default function App() {
    return (
        <>
        <StatusBar hidden={true} barStyle="light-content" backgroundColor="#7159c1" />
        <Routes />
        </>
    );
}
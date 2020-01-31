import React, { Component } from 'react';

import { enableScreens } from 'react-native-screens';

enableScreens();


import { StyleSheet, Text, View, StatusBar } from 'react-native';

import './config/ReactotronConfig';

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

// console.tron.warn("e aí!");

export default function App() {
    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Routes />
        </>
    );
}
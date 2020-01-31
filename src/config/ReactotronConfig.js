import Reactotron from 'reactotron-react-native';

if(__DEV__) {
    const tron = Reactotron.configure({ host: '192.168.30.238' }).useReactNative().connect();

    console.tron = tron;

    tron.clear(); //limpa a timeline sempre que é dado um refresh na aplicação
}
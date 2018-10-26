import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/Header';
class App extends React.Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCXPoO-4iCwWbmGbd5cVSqmxY4AfxtE7cU",
            authDomain: "auth-2b228.firebaseapp.com",
            databaseURL: "https://auth-2b228.firebaseio.com",
            projectId: "auth-2b228",
            storageBucket: "auth-2b228.appspot.com",
            messagingSenderId: "71520933884"
        });
    }

    render() {
        return(
            <View>
                <Header headerText='Authentication' />
                <Text>Hi</Text>
            </View>
        );
    }
};

export default App;
import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
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
                <LoginForm />
            </View>
        );
    }
};

export default App;
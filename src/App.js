import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
class App extends React.Component {
    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCXPoO-4iCwWbmGbd5cVSqmxY4AfxtE7cU",
            authDomain: "auth-2b228.firebaseapp.com",
            databaseURL: "https://auth-2b228.firebaseio.com",
            projectId: "auth-2b228",
            storageBucket: "auth-2b228.appspot.com",
            messagingSenderId: "71520933884"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch(this.state.loggedIn) {
            case true:
                return(<Button>Log Out</Button>);
            case false:
                return <LoginForm />
            default:
                return <Spinner size="large" />
        }
    }

    render() {
        return(
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
};

export default App;
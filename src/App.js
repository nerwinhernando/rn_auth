import React from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common/Header';
class App extends React.Component {
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
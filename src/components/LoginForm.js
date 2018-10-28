import React from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends React.Component {
    state = { text: 'Provide input' }
    
    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        value={this.state.text} 
                        onChangeText={text => this.setState({ text })}
                    />
                </CardSection>
                <CardSection />
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;

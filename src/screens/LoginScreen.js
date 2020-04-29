import React from 'react'
import { View, Text, Button, Alert } from "react-native";
import { TextInput } from 'react-native-gesture-handler';

const inputStyle = {
    borderColor: 'black',
    borderWidth: 1,
    height: 50
}

const users = [{ name: 'Douglas Soares', birthdate: '12/07/90', nickname: 'douglas123', }]

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = { user: '', password: '' }

        this.onUserChanged = this.onUserChanged.bind(this)
        this.onPasswordChanged = this.onPasswordChanged.bind(this)
        this.onLoginClicked = this.onLoginClicked.bind(this)
    }

    onUserChanged(text) {
        this.setState({ user: text })
    }

    onPasswordChanged(text) {
        this.setState({ password: text })
    }

    onLoginClicked() {
        const user = users.find((user) => user.nickname === this.state.user);
        if (user) {

            this.props.navigation.navigate('Account', {
                name: user.name,
                birthdate: user.birthdate
            })
        }else{
            Alert.alert('Usuário ou Senha invalido')
            console.log('Usuário ou Senha invalido')
        }

    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Digite suas credenciais</Text>
                <TextInput
                    style={inputStyle}
                    placeholder='Digite seu usuário'
                    value={this.state.user}
                    onChangeText={this.onUserChanged}></TextInput>
                <TextInput
                    style={inputStyle}
                    placeholder='Digite sua senha'
                    value={this.state.password}
                    onChangeText={this.onPasswordChanged}></TextInput>
                <Button
                    title='Entrar'
                    onPress={this.onLoginClicked}
                ></Button>
            </View>
        )
    }
}
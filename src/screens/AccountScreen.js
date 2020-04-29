import React from 'react';
import { View, Button, Text } from 'react-native';

export default ({ route, navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Usuário: {route.params.name}</Text>
        <Button title='Sair' onPress={() => navigation.popToTop()}></Button>
    </View>
)
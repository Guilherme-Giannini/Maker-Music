import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput
} from 'react-native';
import { style } from './style';
import Logo from '../../assets/logo.png';
export default function Login() {
    return (
        <View style={style.container}>  
            <View style={style.boxtop}>
                <Image 
                    source={Logo}
                    style={style.logo}
                />
                <Text style={style.text}>Bem Vindo!</Text>
            </View>
            <View style={style.boxmid}>
                <Text>Email:</Text>
                <TextInput 
                    placeholder='Digite seu email'>    
                    </TextInput>
                    <Text>Senha:</Text>
                <TextInput 
                    placeholder='Digite sua senha'>    
                    </TextInput>
            </View>
            <View style={style.boxbottom}>  
                <Text>boxbottom</Text>
            </View>
        </View>  
    );
}

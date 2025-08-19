import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { style } from './style';
import Logo from '../../assets/logo.png';

export default function Login() {

    const handleLogin = () => {
        console.log("Entrar clicado!");
    };

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
                <Text style={style.text}>Email:</Text>
                <TextInput 
                    style={style.emailInput}
                    placeholder='Digite seu email'
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={style.text}>Senha:</Text>
                <TextInput 
                    style={style.senhaInput}
                    placeholder='Digite sua senha'
                    secureTextEntry={true}
                />

            
                <TouchableOpacity style={style.button} onPress={handleLogin}>
                    <Text style={style.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <View style={style.boxbottom}>
             <TouchableOpacity style={style.forget} onPress={handleLogin}>
                    <Text style={style.buttonText}>Esqueci a senha</Text>
                </TouchableOpacity>
            </View>
        </View>  
    );
}
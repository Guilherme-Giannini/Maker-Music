import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import Logo from "../../assets/logo.png";
import { style } from "./style";

export default function Login() {
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }

  const handleLogin = () => {
    console.log("Entrar clicado!");
  };
    const handleForget = () => {
        console.log("Esqueci a senha clicado!");
    };

  return (
    <View style={style.container}>
      <View style={style.boxtop}>
        <Image source={Logo} style={style.logo} />
        <Text style={[style.text, { fontFamily: "BebasNeue_400Regular" }]}>
          Bem-vindo ao MakerMusic!
        </Text>
      </View>

      <View style={style.boxmid}>
        <Text style={[style.text, { fontFamily: "BebasNeue_400Regular" }]}>
          Email:
        </Text>
        <TextInput
          style={style.emailInput}
          placeholder="Digite seu email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={[style.text, { fontFamily: "BebasNeue_400Regular" }]}>
          Senha:
        </Text>
        <TextInput
          style={style.senhaInput}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />

        <TouchableOpacity style={style.button} onPress={handleLogin}>
          <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>

      <View style={style.boxbottom}>
        <TouchableOpacity style={style.forget} onPress={handleForget}>
          <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
            Esqueci a senha
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
import React from "react"; 
import { View, 
         Text, 
         TouchableOpacity,
        } 
from "react-native";
import { style } from "./style";
import { useNavigation, NavigationProp } from "@react-navigation/native"; 


type RootStackParamList = {
  Login: undefined;
  AdminScreen: undefined;
  HomeScreen: undefined;
  TeacherScreen: undefined;
};

const handleEntity = () => {
 //acrescentar a lógica para navegar para a tela de gerenciamento de entidades
  console.log("Navegando para Tarefas");
}
const handleAdmHorarios = () => {
 //acrescentar a lógica para navegar para a tela de adm de horarios
  console.log("Navegando para Chat com o Professor");
}
const handleAdmFinanceiro = () => {
 //acrescentar a lógica para navegar para a tela de adm do Financeiro
  console.log("Navegando para Financeiro");
}

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    
      const handleExit = () => {
      navigation.navigate("Login"); 
      console.log("Saindo do aplicativo");
    }
  return (
    <View style={style.container}>

    <View style={style.top}>
      <Text style={style.boasVindas} >MakerMusic</Text>
    </View>

    <View>
        <Text style={style.text}>Escolha uma opção no menu abaixo.</Text>

          <TouchableOpacity style={style.button} onPress={handleEntity}>
                  <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
                    Gerenciamento de entidades
                  </Text>
                </TouchableOpacity>

          <TouchableOpacity style={style.button} onPress={handleAdmHorarios}>
                  <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
                    Gerenciamento de horarios
                  </Text>
                </TouchableOpacity>


          <TouchableOpacity style={style.button} onPress={handleAdmFinanceiro}>
                  <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
                    Gerenciamento Financeiro
                  </Text>
                </TouchableOpacity>

    </View>

    <View>
        <TouchableOpacity style={style.buttonExit} onPress={handleExit}>
                  <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
                    Sair
                  </Text>
                </TouchableOpacity>
    </View>

    </View>
    
  );
}
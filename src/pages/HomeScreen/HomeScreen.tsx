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


const handleHomework = () => {
 //acrescentar a lógica para navegar para a tela de Tarefas
  console.log("Navegando para Tarefas");
}
const handleChat = () => {
 //acrescentar a lógica para navegar para a tela de Chat
  console.log("Navegando para Chat com o Professor");
}
const handleFinanceiro = () => {
 //acrescentar a lógica para navegar para a tela de Financeiro
  console.log("Navegando para Financeiro");
}
const handleHorarios = () => {
 //acrescentar a lógica para navegar para a tela de Horários
  console.log("Navegando para Horários");
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

          <TouchableOpacity style={style.button} onPress={handleHomework}>
                  <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
                    Tarefas
                  </Text>
                </TouchableOpacity>

          <TouchableOpacity style={style.button} onPress={handleChat}>
                  <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
                    Chat com o Professor
                  </Text>
                </TouchableOpacity>


          <TouchableOpacity style={style.button} onPress={handleFinanceiro}>
                  <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
                    Financeiro
                  </Text>
                </TouchableOpacity>

             <TouchableOpacity style={style.button} onPress={handleHorarios}>
                  <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
                    Horarios
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
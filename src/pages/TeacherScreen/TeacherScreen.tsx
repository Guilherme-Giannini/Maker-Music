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



const handleAddHomework = () => {
 //acrescentar a lógica para navegar para a tela de Tarefas
  console.log("Navegando para Tarefas");
}
const handleResponseChat = () => {
 //acrescentar a lógica para navegar para a tela de Chat
  console.log("Navegando para Chat com o Professor");
}
const handleTeacherHorarios = () => {
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

          <TouchableOpacity style={style.button} onPress={handleAddHomework}>
                  <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
                    Atribuir Atividades
                  </Text>
                </TouchableOpacity>

          <TouchableOpacity style={style.button} onPress={handleResponseChat}>
                  <Text style={[style.buttonText, { fontFamily: "BebasNeue_400Regular" }]}>
                    Chat
                  </Text>
                </TouchableOpacity>

             <TouchableOpacity style={style.button} onPress={handleTeacherHorarios}>
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
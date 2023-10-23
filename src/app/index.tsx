import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router"
import { View, Text } from "react-native";
import { Button } from "react-native"
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";

import { styles } from './styles';

export default function Home() {
    // const [email, setEmail] = useState('')
    // const [senha, setSenha] = useState('')
    // const [entrar, setEntrar] = useState('disabled')
/*** 
    const login = () => {
        if(email === "admin@gmail.com" && senha === "123"){

        }
    }
*/
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
      <Text style={styles.formTitle}>App</Text>

      <View>
        <Text>E-mail</Text>
        <TextInput 
            style={styles.formInput}
            placeholder="Informe o E-mail"
        />

        <Text>Senha</Text>
        <TextInput
            style={styles.formInput}
            secureTextEntry
            placeholder=""
        />
      </View>
      <View style={styles.formButton}>
            <Link href="/Home" asChild>
                <Button title="Entrar" disabled/>
            </Link>
            <Link href="/Home" asChild>
                <Button title="Cadastrar" />
            </Link>
        </View>
    </View>
  );
}
import { useState } from "react";
import { Link } from "expo-router"
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-gesture-handler";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from './styles';

export default function Home() {
    const [buttonStatus, setButtonStatus] = useState(true);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const inputChangeHandler = () => {
        if (email.length > 3 && senha.length > 3) {
          setButtonStatus(false);

          console.log(email, senha)
        }
    };
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
      <Text style={styles.formTitle}>App</Text>

      <View>
        <Text
        style={styles.textLabel}
        >E-mail</Text>
        <TextInput 
            style={styles.formInput}
            placeholder="Informe o E-mail"
            onChangeText={(text) => setEmail(text)}
            onChange={inputChangeHandler}
            value={email}
        />

        <Text
        style={styles.textLabel}
        >Senha</Text>
        <TextInput
            style={styles.formInput}
            onChangeText={(text) => setSenha(text)}
            onChange={inputChangeHandler}
            value={senha}
            secureTextEntry
            placeholder=""
        />
      </View>
      
    <View style={styles.buttonContent}>
        <Link href="/Home" asChild>
            <TouchableOpacity disabled={buttonStatus} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </Link>
        <Link href="/Register" asChild >
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </Link>
        </View>
    </View>
  );
}
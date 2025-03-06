import React  from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { TxtInput } from '../src/COMPONENTS/objects';
import { Botão } from '../src/COMPONENTS/objects';
import { colors } from '@/src/COMPONENTS/global';
import { width } from './(tabs)/config/perfil';

export default function Login() {
  return (
    <View style={Style.container}>
      <View style={Style.cardTop}>
          <Text style={Style.cardTop_Title}>Go 2 Work</Text>
          <Text style={Style.cardTop_subTitle}>Volte a para encontrar novos interreses.</Text>
      </View>

      <View style={Style.cardBottom}>
        <Text style={Style.cardBottom_text}>Digite seu email:</Text>
        <TxtInput 
          placeholder="Email"
          // value={email}
          placeholderTextColor={colors.tituloBranco}
          // onChangeText={setEmail}
        />
        <Text style={Style.cardBottom_text}>Digite sua senha:</Text>
        <TxtInput
          placeholder="Senha"
          placeholderTextColor={colors.tituloBranco}
          secureTextEntry
          // value={password}
          // onChangeText={setPassword}
        />
        <TouchableOpacity /*onPress={() => RecuperarSenha}*/>
           <Text style={Style.cardBottom_recovery}>Deseja recuperar sua senha?</Text>
        </TouchableOpacity>
        {/* {isLoading ? (
          <ActivityIndicator size="large" color={colors.amarelo1} />
        ) : ( */}
          <Botão activeOpacity={0.8} /*</View>onPress={handleLogin}*/ >
            <Text style={{ fontSize: 18, color: colors.tituloBranco }}>Entrar</Text>
          </Botão>
        {/* )} */}
        <Text style={Style.textBottom}>
          Não tem conta? 
          <Link href="/" style={Style.links}>
            crie aqui agora!
          </Link>
        </Text>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#242424",
  },
  cardTop: {
    height: '24%',
    width: width * 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: 'red'
  },
  cardTop_Title: {
    fontSize: 50,
    color: colors.amarelo2,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardTop_subTitle: {
    fontSize: 17,
    color: colors.tituloBranco,
    marginBottom: 20,
  },
  cardBottom: {
    minHeight: '65%',
    width: "90%",
    backgroundColor: colors.fundo2,
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  cardBottom_text: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 20,
    color: colors.tituloBranco,
  },
  cardBottom_recovery: {
    fontSize: 18,
    marginBottom: 35,
    marginTop: 35,
    color: colors.tituloBranco,
  },
  textBottom: {
    fontSize: 18,
    top: 80,
    color: colors.tituloBranco,
    justifyContent: "space-around",
  },
  links: {
    color: colors.amarelo1,
  },
});
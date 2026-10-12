import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

interface LoginProps {
  onForgot: () => void;
  onRegister: () => void;
}

export function LoginScreen({ onForgot, onRegister }: LoginProps) {
  const [loginPhone, setLoginPhone] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>С возвращением!</Text>
      <Text style={styles.sub}>Войдите в свой аккаунт.</Text>

      <Input
        icon="📞"
        placeholder="Номер телефона"
        value={loginPhone}
        onChangeText={setLoginPhone}
        keyboardType="phone-pad"
      />
      <Input
        icon="🔒"
        placeholder="Пароль"
        secure
        value={loginPassword}
        onChangeText={setLoginPassword}
      />

      <Pressable onPress={onForgot}>
        <Text style={styles.forgot}>Забыли пароль?</Text>
      </Pressable>

      <Button text="Войти" onPress={() => console.log('Вход:', loginPhone)} />

      <Text style={styles.noAccount}>У вас нет аккаунта?</Text>

      {/* Вызов перехода на регистрацию */}
      <Pressable onPress={onRegister}>
        <Text style={styles.register}>Зарегистрироваться</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 26, fontWeight: '700', color: '#1B1923' },
  sub: { fontSize: 16, color: '#AAA9B2', lineHeight: 22, marginTop: 6, marginBottom: 24 },
  forgot: { color: '#A811DA', fontSize: 15, textAlign: 'right', marginTop: 2, marginBottom: 24 },
  noAccount: { color: '#AAA9B2', textAlign: 'center', fontSize: 15 },
  register: { color: '#A811DA', textAlign: 'center', fontSize: 16, fontWeight: '600', marginTop: 6 },
});
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

interface ResetPasswordProps {
  onDone?: () => void;
  onNext?: () => void;
}

export function ResetPasswordScreen({ onDone, onNext }: ResetPasswordProps) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = () => {
    if (onDone) onDone();
    if (onNext) onNext();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Новый пароль</Text>
      <Text style={styles.sub}>
        Придумайте новый пароль для входа в ваш аккаунт.
      </Text>

      <Input
        label="Новый пароль"
        placeholder="Введите новый пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Input
        label="Повторите пароль"
        placeholder="Повторите новый пароль"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <View style={styles.buttonWrapper}>
        <Button text="Сохранить" onPress={handleSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1B1923',
  },
  sub: {
    fontSize: 16,
    color: '#AAA9B2',
    lineHeight: 22,
    marginTop: 6,
    marginBottom: 24,
  },
  buttonWrapper: {
    marginTop: 'auto',
    marginBottom: 20,
  },
});
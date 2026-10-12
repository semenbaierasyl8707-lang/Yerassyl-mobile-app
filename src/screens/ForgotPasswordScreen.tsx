import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

interface Props {
  phone: string;
  setPhone: (phone: string) => void;
  onNext: () => void;
}

export function ForgotPasswordScreen({ phone, setPhone, onNext }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Восстановление пароля</Text>
      <Text style={styles.sub}>
        Введите свой номер телефона, чтобы{'\n'}восстановить пароль
      </Text>

      <Input
        icon="📞"
        placeholder="+7 (700) 555 77 55"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Button text="Продолжить" onPress={onNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 26, fontWeight: '700', color: '#1B1923' },
  sub: { fontSize: 16, color: '#AAA9B2', lineHeight: 22, marginTop: 6, marginBottom: 24 },
});
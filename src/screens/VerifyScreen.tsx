import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from '../components/Button';

interface Props {
  phone: string;
  code: string;
  setCode: (code: string) => void;
  onNext: () => void;
}

export function VerifyScreen({ phone, code, setCode, onNext }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Подтвердить номер</Text>
      <Text style={styles.sub}>
        Мы только что отправили код на{'\n'}
        {phone || '+7 (700) 555 77 55'}
      </Text>

      <TextInput
        style={styles.code}
        value={code}
        onChangeText={setCode}
        placeholder="7854"
        placeholderTextColor="#AAA9B2"
        keyboardType="number-pad"
        maxLength={4}
      />

      <Button text="Продолжить" onPress={onNext} />

      <Pressable onPress={() => console.log('Повтор')}>
        <Text style={styles.resend}>Отправить код еще раз</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 26, fontWeight: '700', color: '#1B1923' },
  sub: { fontSize: 16, color: '#AAA9B2', lineHeight: 22, marginTop: 6, marginBottom: 24 },
  code: {
    height: 60,
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 8,
    color: '#1B1923',
    marginBottom: 16,
  },
  resend: { textAlign: 'center', color: '#AAA9B2', fontSize: 15 },
});
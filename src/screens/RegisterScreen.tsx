import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

interface RegisterScreenProps {
  onLogin: () => void;
  onNext: () => void;
}

export function RegisterScreen({ onLogin, onNext }: RegisterScreenProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isAccepted, setIsAccepted] = useState(false);

  // Проверка: имя, телефон и согласие с условиями
  const isFormValid =
    name.trim().length > 0 &&
    phone.trim().length > 0 &&
    isAccepted;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Регистрация</Text>
      <Text style={styles.sub}>
        Создайте аккаунт, чтобы пользоваться всеми возможностями приложения.
      </Text>

      {/* Поле Ввода Имени */}
      <Input
        icon="👤"
        placeholder="Ваше имя"
        value={name}
        onChangeText={setName}
      />

      {/* Поле Ввода Номера */}
      <Input
        icon="📞"
        placeholder="+7 (___) ___-__-__"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      {/* Чекбокс «Условия использования» */}
      <Pressable
        style={styles.checkboxContainer}
        onPress={() => setIsAccepted(!isAccepted)}
      >
        <View style={[styles.checkbox, isAccepted && styles.checkboxActive]}>
          {isAccepted && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={styles.termsText}>
          Я согласен с <Text style={styles.termsLink}>Условиями использования</Text>
        </Text>
      </Pressable>

      {/* Кнопка перехода к выбору города */}
      <View style={styles.buttonWrapper}>
        <Button
          text="Продолжить"
          onPress={isFormValid ? onNext : () => {}}
          disabled={!isFormValid}
        />
      </View>

      {/* Переход на экран входа */}
      <Pressable onPress={onLogin} style={styles.loginLink}>
        <Text style={styles.loginText}>
          Уже есть аккаунт? <Text style={styles.loginBold}>Войти</Text>
        </Text>
      </Pressable>
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#AAA9B2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxActive: {
    backgroundColor: '#A811DA',
    borderColor: '#A811DA',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 14,
    color: '#1B1923',
    flex: 1,
  },
  termsLink: {
    color: '#A811DA',
    fontWeight: '600',
  },
  buttonWrapper: {
    marginTop: 'auto',
    marginBottom: 10,
  },
  loginLink: {
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 15,
    color: '#AAA9B2',
  },
  loginBold: {
    color: '#A811DA',
    fontWeight: '700',
  },
});
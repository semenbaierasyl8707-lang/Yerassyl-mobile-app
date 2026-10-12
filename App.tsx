import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { LoginScreen } from './src/screens/LoginScreen';
import { RegisterScreen } from './src/screens/RegisterScreen';
import { SelectCityScreen } from './src/screens/SelectCityScreen';
import { ForgotPasswordScreen } from './src/screens/ForgotPasswordScreen';
import { VerifyScreen } from './src/screens/VerifyScreen';
import { ResetPasswordScreen } from './src/screens/ResetPasswordScreen';

import CatalogScreen from './src/screens/CatalogScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import SupportScreen from './src/screens/SupportScreen';

type PageType =
  | 'login'
  | 'register'
  | 'city'
  | 'forget'
  | 'verify'
  | 'reset'
  | 'catalog'
  | 'notifications'
  | 'support';

export default function App() {
  const [page, setPage] = useState<PageType>('login');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  const handleBack = () => {
    if (page === 'register') setPage('login');
    if (page === 'city') setPage('register');
    if (page === 'forget') setPage('login');
    if (page === 'verify') setPage('forget');
    if (page === 'reset') setPage('verify');
    if (page === 'catalog') setPage('login');
    if (page === 'notifications') setPage('catalog');
    if (page === 'support') setPage('catalog');
  };

  const showBackButton = page !== 'login' && page !== 'catalog';

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe}>
        <StatusBar style="dark" />

        <View style={styles.container}>
          {showBackButton ? (
            <Pressable onPress={handleBack}>
              <Text style={styles.back}>←</Text>
            </Pressable>
          ) : (
            <View style={styles.backPlaceholder} />
          )}

          {/* Исходные экраны */}
          {page === 'login' && (
            <LoginScreen
              onForgot={() => setPage('forget')}
              onRegister={() => setPage('register')}
            />
          )}

          {page === 'register' && (
            <RegisterScreen
              onLogin={() => setPage('login')}
              onNext={() => setPage('city')}
            />
          )}

          {page === 'city' && (
            <SelectCityScreen onNext={() => setPage('catalog')} />
          )}

          {page === 'forget' && (
            <ForgotPasswordScreen
              phone={phone}
              setPhone={setPhone}
              onNext={() => setPage('verify')}
            />
          )}

          {page === 'verify' && (
            <VerifyScreen
              phone={phone}
              code={code}
              setCode={setCode}
              onNext={() => setPage('reset')}
            />
          )}

          {page === 'reset' && (
            <ResetPasswordScreen onDone={() => setPage('login')} />
          )}

          {/* 3 новых уникальных экрана */}
          {page === 'catalog' && (
            <CatalogScreen
              onNotifications={() => setPage('notifications')}
              onSupport={() => setPage('support')}
            />
          )}

          {page === 'notifications' && (
            <NotificationsScreen onBack={() => setPage('catalog')} />
          )}

          {page === 'support' && (
            <SupportScreen
              onBack={() => setPage('catalog')}
              onLogout={() => setPage('login')}
            />
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 10,
  },
  back: {
    fontSize: 32,
    color: '#1B1923',
    marginBottom: 20,
  },
  backPlaceholder: {
    height: 52,
  },
});
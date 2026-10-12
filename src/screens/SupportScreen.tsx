import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

interface SupportProps {
  onBack: () => void;
  onLogout: () => void;
}

export default function SupportScreen({ onBack, onLogout }: SupportProps) {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Центр поддержки</Text>

      <View style={styles.helpBanner}>
        <Text style={styles.helpTitle}>Оператор онлайн</Text>
        <Text style={styles.helpSubtitle}>Среднее время ответа — 2 минуты. Задайте любой вопрос.</Text>
        <TouchableOpacity style={styles.chatBtn}>
          <Text style={styles.chatBtnText}>Начать чат с оператором</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionHeader}>Частые вопросы</Text>

      <View style={styles.faqCard}>
        <Text style={styles.faqQuestion}>Как изменить номер телефона?</Text>
        <Text style={styles.faqAnswer}>Номер можно обновить в профиле или обратившись к поддержке.</Text>
      </View>

      <View style={styles.faqCard}>
        <Text style={styles.faqQuestion}>Как сбросить пароль?</Text>
        <Text style={styles.faqAnswer}>Используйте функцию «Забыли пароль» на экране входа.</Text>
      </View>

      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.secondaryBtn} onPress={onBack}>
          <Text style={styles.secondaryBtnText}>Назад</Text>
        </TouchableOpacity>
        <View style={{ height: 12 }} />
        <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
          <Text style={styles.logoutBtnText}>Выйти из аккаунта</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    backgroundColor: '#ffffff',
    flexGrow: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1B1923',
    marginBottom: 20,
  },
  helpBanner: {
    backgroundColor: '#9E00E6',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
  },
  helpTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  helpSubtitle: {
    color: '#F9EAFF',
    fontSize: 13,
    marginBottom: 16,
    lineHeight: 18,
  },
  chatBtn: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: 'center',
  },
  chatBtnText: {
    color: '#9E00E6',
    fontSize: 15,
    fontWeight: '700',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1B1923',
    marginBottom: 12,
  },
  faqCard: {
    backgroundColor: '#F7F7FA',
    padding: 16,
    borderRadius: 16,
    marginBottom: 10,
  },
  faqQuestion: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1B1923',
    marginBottom: 4,
  },
  faqAnswer: {
    fontSize: 13,
    color: '#8E8E93',
    lineHeight: 18,
  },
  bottomButtons: {
    marginTop: 'auto',
    paddingTop: 16,
  },
  secondaryBtn: {
    backgroundColor: '#F7F7FA',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
  },
  secondaryBtnText: {
    color: '#1B1923',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutBtn: {
    backgroundColor: '#FFF0F0',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
  },
  logoutBtnText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
  },
});
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

interface NotificationsProps {
  onBack: () => void;
}

const NOTIFICATIONS = [
  { id: '1', title: 'Успешная регистрация', text: 'Добро пожаловать в приложение! Все функции активны.', time: 'Только что', unread: true },
  { id: '2', title: 'Бонусы зачислены', text: 'Вам начислено 500 приветственных баллов.', time: '2 часа назад', unread: true },
  { id: '3', title: 'Безопасность', text: 'Вход в аккаунт выполнен с нового устройства.', time: 'Вчера', unread: false },
];

export default function NotificationsScreen({ onBack }: NotificationsProps) {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Уведомления</Text>

      {NOTIFICATIONS.map((item) => (
        <View key={item.id} style={[styles.card, item.unread && styles.unreadCard]}>
          <View style={styles.cardTop}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardTime}>{item.time}</Text>
          </View>
          <Text style={styles.cardText}>{item.text}</Text>
        </View>
      ))}

      <View style={styles.actions}>
        <TouchableOpacity style={styles.secondaryBtn} onPress={onBack}>
          <Text style={styles.secondaryBtnText}>Назад в каталог</Text>
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
  card: {
    backgroundColor: '#F7F7FA',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  unreadCard: {
    backgroundColor: '#FDF7FF',
    borderLeftWidth: 4,
    borderLeftColor: '#9E00E6',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1B1923',
  },
  cardTime: {
    fontSize: 12,
    color: '#8E8E93',
  },
  cardText: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
  },
  actions: {
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
});
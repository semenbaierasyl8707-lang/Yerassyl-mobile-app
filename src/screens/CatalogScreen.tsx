import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

interface CatalogProps {
  onNotifications: () => void;
  onSupport: () => void;
}

const CATEGORIES = ['Все', 'Популярное', 'Новинки', 'Скидки'];

const ITEMS = [
  { id: '1', title: 'Экспресс доставка', desc: 'Доставим за 30 минут по городу', price: 'от 500 ₸', icon: '⚡' },
  { id: '2', title: 'Подписка Premium', desc: 'Бесплатные опции и кэшбэк 10%', price: '1 490 ₸/мес', icon: '⭐' },
  { id: '3', title: 'Бонусный счет', desc: 'У вас 2 500 приветственных бонусов', price: 'Активно', icon: '🎁' },
];

export default function CatalogScreen({ onNotifications, onSupport }: CatalogProps) {
  const [activeTab, setActiveTab] = useState('Все');

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.subTitle}>Каталог предложений</Text>
          <Text style={styles.title}>Сервисы</Text>
        </View>
        <TouchableOpacity style={styles.iconBtn} onPress={onNotifications}>
          <Text style={styles.iconText}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
        {CATEGORIES.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tab, activeTab === tab && styles.tabActive]}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionHeader}>Доступные опции</Text>

      {ITEMS.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.cardIconBox}>
            <Text style={styles.cardIcon}>{item.icon}</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.desc}</Text>
            <Text style={styles.cardPrice}>{item.price}</Text>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.supportBanner} onPress={onSupport}>
        <Text style={styles.supportBannerTitle}>Нужна помощь?</Text>
        <Text style={styles.supportBannerSubtitle}>Служба поддержки и ответы на частые вопросы →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    backgroundColor: '#ffffff',
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 14,
    color: '#8E8E93',
    fontWeight: '500',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1B1923',
    marginTop: 2,
  },
  iconBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F5E6FD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 20,
  },
 tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    maxHeight: 40, 
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F7F7FA',
    marginRight: 8,
    alignSelf: 'flex-start',
  },
  tabActive: {
    backgroundColor: '#9E00E6',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8E8E93',
  },
  tabTextActive: {
    color: '#ffffff',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1B1923',
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#F7F7FA',
    padding: 16,
    borderRadius: 18,
    marginBottom: 12,
    alignItems: 'center',
  },
  cardIconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#F5E6FD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  cardIcon: {
    fontSize: 22,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1B1923',
    marginBottom: 2,
  },
  cardDesc: {
    fontSize: 13,
    color: '#8E8E93',
    marginBottom: 4,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#9E00E6',
  },
  supportBanner: {
    marginTop: 10,
    backgroundColor: '#F5E6FD',
    padding: 18,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E0A8FF',
  },
  supportBannerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#9E00E6',
    marginBottom: 4,
  },
  supportBannerSubtitle: {
    fontSize: 13,
    color: '#555',
  },
});
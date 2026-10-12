import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';

export function SelectCityScreen({ onNext }: { onNext: () => void }) {
  const [selectedCity, setSelectedCity] = useState('Алматы');
  const [isOpen, setIsOpen] = useState(false);

  const cities = ['Алматы', 'Астана', 'Шымкент', 'Караганда', 'Актобе'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Выберите город</Text>
      <Text style={styles.sub}>
        Заведение, которые будут показываться вам, будут зависеть от вашего города.
      </Text>

      {/* Селект выбора города */}
      <Pressable style={styles.selectBox} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.selectText}>{selectedCity}</Text>
        <Text style={styles.arrow}>{isOpen ? '▲' : '▼'}</Text>
      </Pressable>

      {/* Выпадающий список городов */}
      {isOpen && (
        <View style={styles.dropdown}>
          {cities.map((city) => (
            <Pressable
              key={city}
              style={styles.dropdownItem}
              onPress={() => {
                setSelectedCity(city);
                setIsOpen(false);
              }}
            >
              <Text
                style={[
                  styles.itemText,
                  selectedCity === city && styles.selectedItemText,
                ]}
              >
                {city}
              </Text>
            </Pressable>
          ))}
        </View>
      )}

      <View style={styles.buttonWrapper}>
        <Button text="Продолжить" onPress={onNext} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 26, fontWeight: '700', color: '#1B1923' },
  sub: { fontSize: 16, color: '#AAA9B2', lineHeight: 22, marginTop: 6, marginBottom: 24 },
  selectBox: {
    height: 60,
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },
  selectText: { fontSize: 16, color: '#1B1923' },
  arrow: { fontSize: 12, color: '#AAA9B2' },
  dropdown: {
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    marginTop: 8,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  itemText: {
    fontSize: 16,
    color: '#1B1923',
  },
  selectedItemText: {
    color: '#A811DA',
    fontWeight: '700',
  },
  buttonWrapper: {
    marginTop: 'auto', // Нажатие кнопки вниз как на макете
    marginBottom: 20,
  },
});
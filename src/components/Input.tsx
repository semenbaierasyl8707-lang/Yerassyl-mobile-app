import React from 'react';
import { StyleSheet, Text, TextInput, View, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  icon?: string;
  label?: string;
  secure?: boolean;
}

export function Input({
  icon,
  label,
  placeholder,
  value,
  onChangeText,
  secure,
  secureTextEntry,
  keyboardType,
  ...props
}: InputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputBox}>
        {icon && <Text style={styles.icon}>{icon}</Text>}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#AAA9B2"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secure || secureTextEntry}
          keyboardType={keyboardType}
          {...props}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  label: {
    fontSize: 14,
    color: '#1B1923',
    marginBottom: 6,
    fontWeight: '500',
  },
  inputBox: {
    height: 60,
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  icon: {
    fontSize: 19,
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1B1923',
  },
});
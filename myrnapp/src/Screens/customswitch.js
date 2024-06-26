import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const CustomSwitch = ({ value, onValueChange }) => {
  return (
    <TouchableOpacity
      style={[styles.switch, value && styles.switchChecked]}
      onPress={onValueChange}
    >
      <View style={[styles.switchCircle, value && styles.switchCircleChecked]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switch: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    boxShadow: 'inset 0 0 0 1px #c9c9c9',
    backgroundColor: '#dadada',
    width: '3rem',
    padding: '0.125rem',
    borderRadius: '3rem',
    cursor: 'pointer',
    transition: 'background-color 0.75s ease, box-shadow 0.35s ease-in',
  },
  switchChecked: {
    backgroundColor: '#5dca3e',
    boxShadow: 'inset 0 0 0 1px #5dca3e',
  },
  switchCircle: {
    borderRadius: '1rem',
    height: '1.5rem',
    width: '1.5rem',
    boxShadow: '0 0 3px rgba(0, 0, 0, 0.32)',
    backgroundColor: '#ffffff',
    border: '1px solid rgba(0, 0, 0, 0)',
    transition: 'all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.175)',
  },
  switchCircleChecked: {
    transform: 'translateX(1.5rem)',
  },
});

export default CustomSwitch;

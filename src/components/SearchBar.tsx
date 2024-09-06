import React from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';

import { defaultStyles } from '../styles';
import type { SearchBarProps } from '../types';

export const SearchBar: React.FC<SearchBarProps> = ({
  onChangeText,
  styles,
  value,
  onClear,
}) => (
  <View style={[defaultStyles.searchBar, styles?.container]}>
    <TextInput
      style={[defaultStyles.searchInput, styles?.input]}
      placeholder="Search..."
      onChangeText={onChangeText}
      value={value}
    />
    {value !== '' && (
      <TouchableOpacity
        hitSlop={{
          top: 10,
          bottom: 10,
          left: 10,
          right: 10,
        }}
        onPress={onClear}
        style={defaultStyles.clearButton}
      >
        <Text style={[defaultStyles.clearButtonText, styles?.clearButtonText]}>
          ×
        </Text>
      </TouchableOpacity>
    )}
  </View>
);

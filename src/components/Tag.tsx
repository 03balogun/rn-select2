import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { defaultStyles } from '../styles';
import type { RNSelect2Item, TagStyles } from '../types';

interface TagProps {
  item: RNSelect2Item;
  onRemove: (item: RNSelect2Item) => void;
  styles?: TagStyles;
}

export const Tag: React.FC<TagProps> = ({ item, onRemove, styles }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[defaultStyles.tag, styles?.container]}
      onPress={() => onRemove(item)}
    >
      <Text style={[defaultStyles.tagText, styles?.text]}>{item.label}</Text>
      <Text style={[defaultStyles.removeIcon, styles?.removeIcon]}>×</Text>
    </TouchableOpacity>
  );
};

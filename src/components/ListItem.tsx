import React from 'react';
import { TouchableOpacity } from 'react-native';

import type { ListItemProps } from '../types';
import { ListItemText } from './ListItemText';
import { defaultStyles } from '../styles';

export const ListItem: React.FC<ListItemProps> = ({
  item,
  isSelected,
  onSelect,
  searchQuery,
  styles,
}) => (
  <TouchableOpacity
    testID={`listItem-${item.value}`}
    style={[
      defaultStyles.item,
      styles?.container,
      isSelected && defaultStyles.selectedItem,
      isSelected && styles?.selectedText,
    ]}
    onPress={() => onSelect(item)}
  >
    <ListItemText
      text={item.label}
      highlight={searchQuery}
      style={styles?.text}
      highlightedText={styles?.highlightedText}
    />
  </TouchableOpacity>
);

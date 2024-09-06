import React from 'react';
import { Text } from 'react-native';

import { defaultStyles } from '../styles';
import type { ListItemTextProps } from '../types';

export const ListItemText: React.FC<ListItemTextProps> = ({
  text,
  highlight,
  style,
  highlightedText,
}) => {
  if (!highlight.trim()) {
    return <Text style={style}>{text}</Text>;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);
  return (
    <Text style={style}>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <Text
            key={i}
            style={[style, defaultStyles.highlight, highlightedText]}
          >
            {part}
          </Text>
        ) : (
          part
        )
      )}
    </Text>
  );
};

import React from 'react';
import { Text, View } from 'react-native';

import { defaultStyles } from '../styles';
import type { ListItemHeaderProps } from '../types';

export const ListItemHeader: React.FC<ListItemHeaderProps> = ({
  title,
  styles,
}) => {
  return (
    <View style={[defaultStyles.groupHeader, styles?.container]}>
      <Text style={[defaultStyles.groupHeaderText, styles?.text]}>{title}</Text>
    </View>
  );
};

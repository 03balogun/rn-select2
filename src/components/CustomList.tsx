import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';
import Animated, {
  FadeInDown,
  LinearTransition,
} from 'react-native-reanimated';

import type {
  CustomListProps,
  RenderItemProps,
  RNSelect2BaseGroup,
  RNSelect2Item,
} from '../types';

export const CustomList: React.FC<CustomListProps> = ({
  data,
  renderItem,
  keyExtractor,
  isGrouped,
  threshold = 100,
}) => {
  const flattenedData = useMemo(() => {
    if (!isGrouped) return data as RNSelect2Item[];
    return (data as RNSelect2BaseGroup[]).flatMap((group) => [
      { type: 'header' as const, title: group.title },
      ...group.items.map((item) => ({ type: 'item' as const, ...item })),
    ]);
  }, [data, isGrouped]);

  if (flattenedData.length <= threshold) {
    return (
      <Animated.ScrollView
        nestedScrollEnabled
        layout={LinearTransition}
        entering={FadeInDown}
      >
        {flattenedData.map((item) => (
          <View key={keyExtractor(item as RenderItemProps)}>
            {renderItem(item as RenderItemProps)}
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  return (
    <FlatList
      nestedScrollEnabled
      data={flattenedData as RenderItemProps[]}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={keyExtractor}
    />
  );
};

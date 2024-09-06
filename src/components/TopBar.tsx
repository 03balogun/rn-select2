import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  type ViewStyle,
  type TextStyle,
} from 'react-native';

import type { RNSelect2Item, TagStyles, TopBarStyles } from '../types';
import { Tag } from './Tag';
import { defaultStyles } from '../styles';

interface TopBarBaseProps {
  onPress: () => void;
  onClear: () => void;
  isOpen: boolean;
  placeholder: string;
  styles?: TopBarStyles;
}

interface SingleSelectTopBarProps extends TopBarBaseProps {
  value: string;
}

interface MultiSelectTopBarProps extends TopBarBaseProps {
  selectedItems: RNSelect2Item[];
  onRemoveItem: (item: RNSelect2Item) => void;
  tagStyle?: ViewStyle;
  tagTextStyle?: TextStyle;
  tagStyles?: TagStyles;
}

const ClearButton: React.FC<{ onPress: () => void; style?: TextStyle }> = ({
  onPress,
  style,
}) => (
  <TouchableOpacity
    hitSlop={{
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
    }}
    testID={'clear-button'}
    style={defaultStyles.clearButton}
    onPress={onPress}
  >
    <Text style={[defaultStyles.clearButtonText, style]}>×</Text>
  </TouchableOpacity>
);

export const SingleSelectTopBar: React.FC<SingleSelectTopBarProps> = ({
  value,
  onPress,
  isOpen,
  placeholder,
  styles = {},
  onClear,
}) => (
  <TouchableOpacity
    testID={'singleSelectTopBar'}
    onPress={onPress}
    style={[defaultStyles.topBar, styles.container]}
    activeOpacity={0.7}
  >
    <Text
      style={[
        defaultStyles.topBarText,
        !value && defaultStyles.topBarPlaceholder,
        styles.text,
        !value && styles.placeholder,
      ]}
    >
      {value || placeholder}
    </Text>
    <View style={defaultStyles.pickerRow}>
      {value && <ClearButton onPress={onClear} style={styles.clearButton} />}
      <Text style={[defaultStyles.arrow, styles.arrow]}>
        {isOpen ? '▲' : '▼'}
      </Text>
    </View>
  </TouchableOpacity>
);

export const MultiSelectTopBar: React.FC<MultiSelectTopBarProps> = ({
  selectedItems,
  onPress,
  isOpen,
  placeholder,
  onRemoveItem,
  onClear,
  styles = {},
  tagStyles = {},
}) => (
  <View>
    <TouchableOpacity
      testID={'multiSelectTopBar'}
      onPress={onPress}
      style={[defaultStyles.topBar, styles.container]}
      activeOpacity={0.7}
    >
      <Text
        style={[
          defaultStyles.topBarText,
          selectedItems.length === 0 && defaultStyles.topBarPlaceholder,
          styles.text,
          selectedItems.length === 0 && styles.placeholder,
        ]}
      >
        {selectedItems.length > 0
          ? `${selectedItems.length} selected`
          : placeholder}
      </Text>
      <View style={defaultStyles.pickerRow}>
        {selectedItems.length > 0 && (
          <ClearButton onPress={onClear} style={styles.clearButton} />
        )}
        <Text style={[defaultStyles.arrow, styles.arrow]}>
          {isOpen ? '▲' : '▼'}
        </Text>
      </View>
    </TouchableOpacity>
    {selectedItems.length > 0 && (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={defaultStyles.tagContainer}
      >
        {selectedItems.map((item) => (
          <Tag
            key={item.value}
            item={item}
            onRemove={onRemoveItem}
            styles={tagStyles}
          />
        ))}
      </ScrollView>
    )}
  </View>
);

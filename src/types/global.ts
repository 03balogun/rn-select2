import React from 'react';
import type { TextStyle } from 'react-native';

import type {
  ListItemHeaderStyles,
  ListItemStyles,
  RNSelect2Styles,
  SearchBarStyles,
} from './styles';

export interface RNSelect2Item {
  value: string;
  label: string;
}

export interface RNSelect2BaseGroup {
  title: string;
  items: RNSelect2Item[];
}

export type RNSelect2Data =
  | { type: 'list' | string; data: RNSelect2Item[] }
  | { type: 'group' | string; data: RNSelect2BaseGroup[] };

interface RNSelect2BaseProps {
  data: RNSelect2Data;
  placeholder?: string;
  styles?: RNSelect2Styles;
}

export interface RNSelect2SingleProps extends RNSelect2BaseProps {
  multiSelect?: false;
  onSelect: (item: RNSelect2Item | null) => void;
}

export interface RNSelect2MultiProps extends RNSelect2BaseProps {
  multiSelect: true;
  onSelect: (items: RNSelect2Item[] | null) => void;
}

export type RNSelect2Props = RNSelect2SingleProps | RNSelect2MultiProps;

export interface SearchBarProps {
  onChangeText: (text: string) => void;
  styles?: SearchBarStyles;
  onClear: () => void;
  value: string;
}

export interface ListItemTextProps {
  text: string;
  highlight: string;
  style?: TextStyle;
  highlightedText?: TextStyle;
}

export interface ListItemProps {
  item: RNSelect2Item;
  isSelected: boolean;
  onSelect: (item: RNSelect2Item) => void;
  searchQuery: string;
  styles?: ListItemStyles;
}

export interface ListItemHeaderProps {
  title: string;
  styles?: ListItemHeaderStyles;
}

export type RenderItemProps = RNSelect2Item | RNSelect2BaseGroup;

export type CustomListData = RNSelect2Item[] | RNSelect2BaseGroup[];

export interface CustomListProps {
  data: CustomListData;
  renderItem: (item: RenderItemProps) => React.ReactElement;
  keyExtractor: (item: RenderItemProps) => string;
  isGrouped: boolean;
  threshold?: number;
  listItemStyles?: ListItemStyles;
  listItemHeaderStyles?: ListItemHeaderStyles;
}

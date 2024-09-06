import type { ViewStyle, TextStyle } from 'react-native';

export interface TopBarStyles {
  container?: ViewStyle;
  text?: TextStyle;
  placeholder?: TextStyle;
  arrow?: TextStyle;
  clearButton?: TextStyle;
}

export interface TagStyles {
  container?: ViewStyle;
  text?: TextStyle;
  removeIcon?: TextStyle;
}

export interface SearchBarStyles {
  container?: ViewStyle;
  input?: TextStyle;
  clearButton?: TextStyle;
  clearButtonText?: TextStyle;
}

export interface ListItemStyles {
  container?: ViewStyle;
  text?: TextStyle;
  selectedContainer?: ViewStyle;
  selectedText?: TextStyle;
  highlightedText?: TextStyle;
}

export interface ListItemHeaderStyles {
  container?: ViewStyle;
  text?: TextStyle;
}

export interface DropdownStyles {
  container?: ViewStyle;
}

export interface RNSelect2Styles {
  container?: ViewStyle;
  topBar?: TopBarStyles;
  tag?: TagStyles;
  searchBar?: SearchBarStyles;
  listItem?: ListItemStyles;
  listItemHeader?: ListItemHeaderStyles;
  dropdown?: DropdownStyles;
}

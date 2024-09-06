import { useCallback, useState, type JSX } from 'react';
import Animated, {
  FadeInDown,
  LinearTransition,
} from 'react-native-reanimated';

import {
  ListItemHeader,
  ListItem,
  SearchBar,
  CustomList,
  SingleSelectTopBar,
  MultiSelectTopBar,
} from './components';
import { defaultStyles } from './styles';
import type {
  CustomListData,
  RenderItemProps,
  RNSelect2Item,
  RNSelect2MultiProps,
  RNSelect2Props,
  RNSelect2SingleProps,
} from './types';
import { isValidRNSelect2Data } from './utils/isValidRNSelect2Data';

import { useFilteredData } from './hooks';

export function RNSelect2(props: RNSelect2SingleProps): JSX.Element;
export function RNSelect2(props: RNSelect2MultiProps): JSX.Element;
export function RNSelect2(props: RNSelect2Props) {
  const {
    data,
    onSelect,
    placeholder = 'Select an item...',
    multiSelect = false,
    styles = {},
  } = props;

  if (!isValidRNSelect2Data(data)) {
    // This line will never be reached due to the error throwing in isValidRNSelect2Data
    // It's here to satisfy TypeScript
    throw new Error('Invalid data structure');
  }

  const [selectedItems, setSelectedItems] = useState<RNSelect2Item[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useFilteredData(data, searchQuery);

  const handleRemoveItem = useCallback(
    (item: RNSelect2Item) => {
      const newItems = selectedItems.filter((i) => i.value !== item.value);
      setSelectedItems(newItems);

      onSelect?.(newItems as any);
    },
    [onSelect, selectedItems]
  );

  const handleSelectItem = useCallback(
    (item: RNSelect2Item) => {
      if (multiSelect) {
        let result;
        const isAlreadySelected = selectedItems.some(
          (i) => i.value === item.value
        );
        if (isAlreadySelected) {
          result = selectedItems.filter((i) => i.value !== item.value);
        } else {
          result = [...selectedItems, item];
        }
        setSelectedItems(result);
        onSelect?.(result as any);
      } else {
        setSelectedItems([item]);
        setIsOpen(false);
        onSelect?.(item as any);
      }
    },
    [multiSelect, onSelect, selectedItems]
  );

  const handleClearSelection = useCallback(() => {
    setSelectedItems([]);
    onSelect?.(null);
  }, [onSelect]);

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  const renderItem = useCallback(
    (item: RenderItemProps) => {
      if ('type' in item && 'title' in item && item.type === 'header') {
        return (
          <ListItemHeader title={item.title} styles={styles.listItemHeader} />
        );
      }

      return (
        <ListItem
          item={item as RNSelect2Item}
          isSelected={selectedItems.some(
            (i) => i.value === (item as RNSelect2Item).value
          )}
          onSelect={handleSelectItem}
          searchQuery={searchQuery}
          styles={styles.listItem}
        />
      );
    },
    [
      selectedItems,
      handleSelectItem,
      searchQuery,
      styles.listItem,
      styles.listItemHeader,
    ]
  );

  return (
    <Animated.View
      layout={LinearTransition}
      style={[defaultStyles.container, styles.container]}
    >
      {multiSelect ? (
        <MultiSelectTopBar
          selectedItems={selectedItems}
          onPress={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
          onClear={handleClearSelection}
          placeholder={placeholder}
          onRemoveItem={handleRemoveItem}
          styles={styles.topBar}
          tagStyles={styles.tag}
        />
      ) : (
        <SingleSelectTopBar
          value={selectedItems[0]?.label || ''}
          onPress={() => setIsOpen(!isOpen)}
          onClear={handleClearSelection}
          isOpen={isOpen}
          placeholder={placeholder}
          styles={styles.topBar}
        />
      )}
      {isOpen && (
        <Animated.View
          entering={FadeInDown.delay(150)}
          layout={LinearTransition}
          style={[defaultStyles.dropdownContainer, styles.dropdown?.container]}
        >
          <SearchBar
            onChangeText={setSearchQuery}
            onClear={handleClearSearch}
            value={searchQuery}
            styles={styles.searchBar}
          />
          <CustomList
            data={filteredData.data as CustomListData}
            renderItem={renderItem}
            keyExtractor={(item) => ('title' in item ? item.title : item.value)}
            isGrouped={filteredData.type === 'group'}
            listItemStyles={styles.listItem}
            listItemHeaderStyles={styles.listItemHeader}
          />
        </Animated.View>
      )}
    </Animated.View>
  );
}

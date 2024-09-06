import { useCallback, useMemo } from 'react';

import type {
  RNSelect2BaseGroup,
  RNSelect2Item,
  RNSelect2Data,
} from '../types';

export const useFilteredData = (data: RNSelect2Data, searchQuery: string) => {
  const filterItems = useCallback(
    (items: RNSelect2Item[]): RNSelect2Item[] => {
      return items?.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
    [searchQuery]
  );

  return useMemo(() => {
    if (data.type.toLowerCase() === 'group') {
      return {
        type: 'group' as const,
        data: data.data
          .map((group) => ({
            ...group,
            items: filterItems((group as RNSelect2BaseGroup).items),
          }))
          .filter((group) => group?.items?.length > 0),
      };
    }
    return {
      type: 'list' as const,
      data: filterItems(data.data as RNSelect2Item[]),
    };
  }, [data, filterItems]);
};

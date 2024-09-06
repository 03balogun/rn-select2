import type { RNSelect2Data } from '../types';

export function isValidRNSelect2Data(data: RNSelect2Data) {
  if (
    data.type.toLowerCase() !== 'list' &&
    data.type.toLowerCase() !== 'group'
  ) {
    throw new Error('Invalid data type: type must be either "list" or "group"');
  }

  if (!Array.isArray(data.data)) {
    throw new Error('Invalid data: data must be an array');
  }

  if (data.type.toLowerCase() === 'group') {
    if (
      !data.data.every((item) => 'title' in item && Array.isArray(item.items))
    ) {
      throw new Error('Invalid group data structure');
    }
  } else {
    if (!data.data.every((item) => 'value' in item && 'label' in item)) {
      throw new Error('Invalid list data structure');
    }
  }

  return true;
}

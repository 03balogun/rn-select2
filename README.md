# RN-Select2

A highly customizable and feature-rich Select component for React Native applications.

## Description
rn-select2 is a powerful and flexible dropdown component for React Native, inspired by the popular Select2 jQuery plugin. It provides a seamless and intuitive selection experience for both single and multi-select scenarios.

## Features

- Single and multi-select support
- Grouped and non-grouped data structures
- Search functionality with highlighting
- Customizable styling for all sub-components
- Smooth animations for a polished user experience
- Clear button for easy reset of selections
- Fully typed with TypeScript for improved development experience


## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Basic Usage](#basic-usage)
- [Props](#props)
- [Styling](#styling)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the package, run:

```bash
npm install rn-select2
# or
yarn add rn-select2
```

This package has a peer dependency on `react-native-reanimated`. If you haven't already installed it, you'll need to add it to your project:

```bash
npm install react-native-reanimated
# or
yarn add react-native-reanimated
```

Follow the [react-native-reanimated installation instructions](https://docs.swmansion.com/react-native-reanimated/docs/2.x/fundamentals/installation) to complete the setup.

## Basic Usage

Here's a simple example of how to use RN-Select2:

```jsx
import React, { useState } from 'react';
import { View } from 'react-native';
import RNSelect2 from 'rn-select2';

const countries = {
  type: 'list',
  data: [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'mx', label: 'Mexico' },
  ]
};

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <View style={{ padding: 20 }}>
      <RNSelect2
        data={countries}
        onSelect={(item) => setSelectedCountry(item)}
        placeholder="Select a country"
      />
    </View>
  );
};

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `RNSelect2Data` | Required | The data to populate the select component. Can be grouped or non-grouped. |
| `onSelect` | `(item: RNSelect2BaseItem \| RNSelect2BaseItem[] \| null) => void` | Required | Callback function called when an item is selected or deselected. The type of the argument depends on the `multiSelect` prop (see note below). |
| `placeholder` | `string` | `'Select an item...'` | Placeholder text displayed when no item is selected. |
| `multiSelect` | `boolean` | `false` | Enable multi-select mode. |
| `styles` | `RNSelect2Styles` | `{}` | Custom styles for various parts of the component. See Styling section for details. |
| `searchPlaceholder` | `string` | `'Search...'` | Placeholder text for the search input. |
| `closeOnSelect` | `boolean` | `true` | Whether to close the dropdown after an item is selected (only applies to single select mode). |
| `disabled` | `boolean` | `false` | Disable the select component. |

Note on `onSelect`:
- When `multiSelect` is `false`, the callback receives a single `RNSelect2BaseItem` object or `null` (when selection is cleared).
- When `multiSelect` is `true`, the callback receives an array of `RNSelect2BaseItem` objects (which may be empty when all selections are cleared).


### Data Structure

The `data` prop should be an object with the following structure:

```typescript
interface RNSelect2Data {
  type: 'list' | 'group';
  data: RNSelect2BaseItem[] | RNSelect2Group[];
}

interface RNSelect2BaseItem {
  value: string;
  label: string;
}

interface RNSelect2Group {
  title: string;
  items: RNSelect2BaseItem[];
}
```

## Styling

You can customize the appearance of RN-Select2 by passing a `styles` prop. Here's the structure with expected types:

```typescript
interface RNSelect2Styles {
  container?: ViewStyle;
  topBar?: {
    container?: ViewStyle;
    text?: TextStyle;
    placeholder?: TextStyle;
    arrow?: TextStyle;
    clearButton?: TextStyle;
  };
  searchBar?: {
    container?: ViewStyle;
    input?: TextStyle;
    clearButton?: TextStyle;
  };
  dropdown?: {
    container?: ViewStyle;
  };
  listItem?: {
    container?: ViewStyle;
    text?: TextStyle;
  };
  listItemHeader?: {
    container?: ViewStyle;
    text?: TextStyle;
  };
  tag?: {
    container?: ViewStyle;
    text?: TextStyle;
    removeIcon?: TextStyle;
  };
}
```

This structure allows you to customize each part of the component individually. All style properties are optional, so you can choose to style only specific parts of the component.

## Examples

### Grouped Data with Multi-Select

```jsx
const groupedData = {
  type: 'group',
  data: [
    {
      title: 'North America',
      items: [
        { value: 'us', label: 'United States' },
        { value: 'ca', label: 'Canada' },
        { value: 'mx', label: 'Mexico' },
      ]
    },
    {
      title: 'Europe',
      items: [
        { value: 'uk', label: 'United Kingdom' },
        { value: 'fr', label: 'France' },
        { value: 'de', label: 'Germany' },
      ]
    }
  ]
};

<RNSelect2
  data={groupedData}
  onSelect={(items) => console.log('Selected:', items)}
  placeholder="Select countries"
  multiSelect={true}
/>
```

### Custom Styling

```jsx
const customStyles = {
  topBar: {
    container: { backgroundColor: '#f0f0f0', borderRadius: 8 },
    text: { color: '#333', fontSize: 16 },
    placeholder: { color: '#999' },
    arrow: { color: '#666' }
  },
  listItem: {
    container: { borderBottomWidth: 1, borderBottomColor: '#eee' },
    text: { fontSize: 15 }
  },
  tag: {
    container: { backgroundColor: '#007AFF', borderRadius: 16 },
    text: { color: 'white' },
    removeIcon: { color: 'white' }
  }
};

<RNSelect2
  data={data}
  onSelect={handleSelect}
  placeholder="Custom styled select"
  styles={customStyles}
/>
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

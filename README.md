[![NPM](https://nodei.co/npm/rn-select2.png?downloads=true)](https://nodei.co/npm/rn-select2/)

[![npm version](https://badge.fury.io/js/rn-select2.svg)](https://badge.fury.io/js/rn-select2) [![GitHub stars](https://img.shields.io/github/stars/03balogun/rn-select2?style=social)](https://github.com/03balogun/rn-select2/stargazers) [![CodeQL](https://github.com/03balogun/rn-select2/actions/workflows/codeql.yml/badge.svg)](https://github.com/03balogun/rn-select2/actions/workflows/codeql.yml) [![Release & Publish to NPM](https://github.com/03balogun/rn-select2/actions/workflows/release-and-publish-to-npm.yml/badge.svg)](https://github.com/03balogun/rn-select2/actions/workflows/release-and-publish-to-npm.yml)

# RN-Select2 (React Native select2)

rn-select2 is a powerful and flexible dropdown component for React Native, inspired by the popular Select2 jQuery plugin. It provides a seamless and intuitive selection experience for both single and multi-select scenarios.


## Features

- Single and multi-select support
- Grouped and non-grouped data structures
- Search functionality with highlighting
- Customizable styling for all sub-components
- Smooth animations for a polished user experience
- Clear button for easy reset of selections
- Fully typed with TypeScript for improved development experience


## Demo

RN-Select2 offers a rich set of features for both single and multi-select scenarios. Here's a visual demonstration of its capabilities:

### Image

|  |                                                                                                                                                   |   |
|---------|---------------------------------------------------------------------------------------------------------------------------------------------------|---|
| **Single Selection**<br/><br/><img src="https://github.com/user-attachments/assets/f2c48b85-5b1a-4e2b-9449-379eb542fef2" width="350px"> | **Multi Selection**<br/><br/><img src="https://github.com/user-attachments/assets/5bec031e-5272-4d61-bc5a-5a645e408e41" width="350px">                 | **Search Highlighting**<br/><br/><img src="https://github.com/user-attachments/assets/90b4b2dd-439a-416b-91d9-bc185da84332" width="350px">  |
| **Flat List View**<br/><br/><img src="https://github.com/user-attachments/assets/18c86d57-255b-4dba-a07f-078a8bbe6ec9" width="350px"> | **Custom Styling**<br/><br/><img src="https://github.com/user-attachments/assets/07c2fcca-4e5f-42e3-b9ae-26483b6ff64e" width="350px">                      | |

### Video

| Android                | iOS |
|------------------------|-----|
| <video src="https://github.com/user-attachments/assets/97a0705d-d0f7-440a-a373-241e6c22a1e8" controls="controls" style="max-width: 100%;"></video>       | <video src="https://github.com/user-attachments/assets/60571323-7d88-4ccd-a487-34278f9f8e3a" controls="controls" style="max-width: 100%;"></video> |



## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Demo](#demo)
  - [Image](#image)
  - [Video](#video)
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

import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { RNSelect2 } from '../RNSelect2'; // Adjust the import path as needed
import { groupedCountryList, countryList } from '../../data'; // Adjust the import path as needed

describe('RNSelect2', () => {
  it('renders correctly with placeholder', () => {
    const { getByText } = render(
      <RNSelect2
        onSelect={() => {}}
        data={countryList}
        placeholder="Select a country"
      />
    );
    expect(getByText('Select a country')).toBeTruthy();
  });

  it('opens dropdown when pressed', async () => {
    const { getByText, queryByText } = render(
      <RNSelect2
        onSelect={() => {}}
        data={countryList}
        placeholder="Select a country"
      />
    );
    const placeholder = getByText('Select a country');
    fireEvent.press(placeholder);
    await waitFor(() => {
      expect(queryByText('Egypt')).toBeTruthy();
    });
  });

  it('selects an item in single select mode', async () => {
    const onSelect = jest.fn();
    const { getByText } = render(
      <RNSelect2
        data={countryList}
        onSelect={onSelect}
        placeholder="Select a country"
      />
    );
    fireEvent.press(getByText('Select a country'));
    await waitFor(() => {
      fireEvent.press(getByText('Egypt'));
    });
    expect(onSelect).toHaveBeenCalledWith(
      expect.objectContaining({ value: 'eg', label: 'Egypt' })
    );
  });

  it('selects multiple items in multi-select mode', async () => {
    const onSelect = jest.fn();
    const { getByTestId } = render(
      <RNSelect2
        data={countryList}
        onSelect={onSelect}
        placeholder="Select countries"
        multiSelect={true}
      />
    );
    fireEvent.press(getByTestId('multiSelectTopBar'));
    await waitFor(() => {
      fireEvent.press(getByTestId('listItem-eg'));
      fireEvent.press(getByTestId('listItem-ng'));
    });
    expect(onSelect).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ value: 'eg', label: 'Egypt' }),
        expect.objectContaining({ value: 'ng', label: 'Nigeria' }),
      ])
    );
  });

  it('renders grouped data correctly', async () => {
    const { getByText, queryByText } = render(
      <RNSelect2
        onSelect={() => {}}
        data={groupedCountryList}
        placeholder="Select a country"
      />
    );
    fireEvent.press(getByText('Select a country'));
    await waitFor(() => {
      expect(queryByText('Africa')).toBeTruthy();
      expect(queryByText('Asia')).toBeTruthy();
    });
  });

  it('filters items based on search input', async () => {
    const { getByText, getByPlaceholderText, queryByText } = render(
      <RNSelect2
        onSelect={() => {}}
        data={countryList}
        placeholder="Select a country"
      />
    );
    fireEvent.press(getByText('Select a country'));
    const searchInput = getByPlaceholderText('Search...');
    fireEvent.changeText(searchInput, 'egy');
    await waitFor(() => {
      expect(queryByText('Egypt')).toBeTruthy();
      expect(queryByText('Nigeria')).toBeFalsy();
    });
  });

  it('clears selection when clear button is pressed', async () => {
    const onSelect = jest.fn();
    const { getByText, getByTestId } = render(
      <RNSelect2
        data={countryList}
        onSelect={onSelect}
        placeholder="Select a country"
      />
    );
    fireEvent.press(getByText('Select a country'));
    await waitFor(() => {
      fireEvent.press(getByText('Egypt'));
    });
    expect(onSelect).toHaveBeenCalledWith(
      expect.objectContaining({ value: 'eg', label: 'Egypt' })
    );

    const clearButton = getByTestId('clear-button');
    fireEvent.press(clearButton);
    expect(onSelect).toHaveBeenCalledWith(null);
  });
});

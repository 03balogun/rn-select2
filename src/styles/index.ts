import { StyleSheet } from 'react-native';

export const defaultStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  dropdownContainer: {
    maxHeight: 300,
  },
  searchBar: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  groupHeader: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  groupHeaderText: {
    fontWeight: 'bold',
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  selectedItem: {
    backgroundColor: '#e6e6ff',
  },
  highlight: {
    backgroundColor: 'yellow',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  topBarText: {
    fontSize: 16,
  },
  topBarPlaceholder: {
    color: '#999',
  },
  arrow: {
    fontSize: 16,
    color: '#999',
  },
  tagContainer: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tagsContentContainerStyle: {
    paddingHorizontal: 10,
  },
  tag: {
    backgroundColor: '#e1e1e1',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagText: {
    fontSize: 14,
    marginRight: 5,
  },
  removeIcon: {
    fontSize: 18,
    color: '#888',
  },
  clearButton: {
    marginRight: 16,
  },
  clearButtonText: { fontSize: 16, paddingBottom: 3, color: '#999' },
  searchInput: {
    paddingVertical: 10,
    flex: 1,
  },
  pickerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

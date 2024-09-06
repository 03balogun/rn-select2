import { SafeAreaView, StatusBar } from 'react-native';
import RNSelect2Demo from './RNSelect2Demo';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <RNSelect2Demo />
    </SafeAreaView>
  );
}

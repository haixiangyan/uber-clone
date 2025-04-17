import { View, Text } from 'react-native';

import Map from '../components/Map';

const MapScreen = () => {
  return (
    <View>
      <Text>MapScreen</Text>

      <View className="h-1/2">
        <Map />
      </View>

      <View className="h-1/2" />
    </View>
  );
};

export default MapScreen;

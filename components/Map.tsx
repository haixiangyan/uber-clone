import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';

import { selectOrigin } from '../slices/navSlice';

const defaultCoords = {
  long: 114.061499,
  lat: 22.540829,
};

const Map = () => {
  const origin = useSelector(selectOrigin);

  return (
    <MapView
      style={{ height: 300, width: '100%' }}
      mapType="mutedStandard" // 浅色展示，突出路线
      initialRegion={{
        latitude: origin?.location?.lat || defaultCoords.lat,
        longitude: origin?.location?.lng || defaultCoords.long,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      <Marker
        coordinate={{
          latitude: origin?.location?.lat || defaultCoords.lat,
          longitude: origin?.location?.lng || defaultCoords.long,
        }}
        title="Origin"
        description={origin?.description}
        identifier="origin"
      />
    </MapView>
  );
};

export default Map;

import { GOOGLE_MAPS_APIKEY } from '@env';
import { View, Image, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';

import NavOptions from '../components/NavOptions';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="p-5">
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={{ uri: 'https://links.papareact.com/gzs' }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where From"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          minLength={2}
          enablePoweredByContainer={false}
          debounce={400}
          nearbyPlacesAPI="GooglePlacesSearch"
          returnKeyType="search"
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

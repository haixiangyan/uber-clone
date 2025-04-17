import { GOOGLE_MAPS_APIKEY } from '@env';
import { useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';

import { setDestination } from '../slices/navSlice';

export const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text className="py-5 text-center text-xl">Good Morning, Sonny</Text>
      <View className="flex-shrink border-t border-gray-200">
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            debounce={400}
            styles={toInputBoxStyles}
            nearbyPlacesAPI="GooglePlacesSearch"
            returnKeyType="search"
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details?.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard")
            }}
            fetchDetails
            minLength={2}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});

export default NavigateCard;

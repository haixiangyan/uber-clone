import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import { useEffect, useState } from 'react';
import { View, Image, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { selectTravelTimeInfo } from '../slices/navSlice';

const data = [
  {
    id: 'Uber-X-123',
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-XL-456',
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-XL-789',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();

  const travelTimeInfo = useSelector(selectTravelTimeInfo);

  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    setSelected(data[0]);
  }, []);

  return (
    <SafeAreaView className="flex-grow bg-white">
      <View>
        <TouchableOpacity
          className="absolute left-5 top-3 z-40 rounded-full p-3"
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="py-5 text-center text-xl">
          Select a Ride - {travelTimeInfo?.distance?.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { image, id, title, multiplier }, item }) => (
          <TouchableOpacity
            className={`flex-row items-center justify-between px-8 ${id === selected?.id ? 'bg-gray-200' : ''}`}
            onPress={() => setSelected(item)}>
            <Image
              style={{ width: 100, height: 100, resizeMode: 'contain' }}
              source={{ uri: image }}
            />

            <View className="-ml-6">
              <Text className="text-xl font-semibold">{title}</Text>
              <Text>{travelTimeInfo?.duration?.text} Travel Time</Text>
            </View>

            <Text className="text-xl">
              {new Intl.NumberFormat('en-gb', {
                style: 'currency',
                currency: 'GBP',
              }).format(
                ((travelTimeInfo?.duration?.value || 0) * SURGE_CHARGE_RATE * multiplier) / 100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View className="mt-auto border-t border-gray-200">
        <TouchableOpacity
          className={`${!selected && 'bg-gray-300'} m-3 rounded-md bg-black py-3`}
          disabled={!selected}>
          <Text className="text-center text-xl text-white">Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

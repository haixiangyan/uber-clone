import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'Map',
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'Eats',
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          className="m-2 w-40 bg-gray-200 p-2 pb-8 pl-6 pt-4">
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
            <Icon
              className="mt-4 h-10 w-10 rounded-full bg-black p-2"
              type="antdesign"
              color="white"
              name="arrowright"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

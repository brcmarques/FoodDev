import { View, Text, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { RestaurantsItem } from './horizontal'


export interface RestaurantsProps{
  id: string;
  name: string;
  image: string;
}

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>()

  useEffect(() => {
    async function getFoods() {
        const response = await fetch ("http://192.168.0.143:3000/restaurants")    
        const data = await response.json()
        console.log(data);
        setRestaurants(data);
    }

    getFoods();

}, [])

 return (
   
   <FlatList
           data={restaurants}
           renderItem={ ({ item }) => <RestaurantsItem item={item} /> }
           horizontal={true}
           contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16}}
           showsHorizontalScrollIndicator = {false}
      />

  );
}
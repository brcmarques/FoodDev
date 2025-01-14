import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { RestaurantItem } from './item'

export interface RestaurantsProps{
    id: string;
    name: string;
    image: string;
  }

export function RestaurantVerticalList() {

    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])
    
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
   <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
    {restaurants.map( item => (
        <RestaurantItem item={item} key={item.id}/>
    ))}

   </View>
  );
}


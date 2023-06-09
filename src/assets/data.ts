import { Food } from "../app/model/food"

export const sample_foods: Food[] = [
    {
      id:'1',
      name: 'North indian thali',
      cookTime: '10-20',
      price: 10,
      favorite: false,
      origins: ['indian'],
      stars: 4.5,
      imageUrl: 'assets/food1.avif',
      tags: ['FastFood', 'Pizza', 'Lunch'],
    },
    {
      id:'2',
      name: 'Pasta arrabita',
      price: 20,
      cookTime: '20-30',
      favorite: true,
      origins: ['itly'],
      stars: 4.7,
      imageUrl: 'assets/food2.avif',
      tags: ['SlowFood', 'Lunch'],
    },
    {
      id:'3',
      name: 'paneer65',
      price: 5,
      cookTime: '10-15',
      favorite: false,
      origins: ['indian', 'us'],
      stars: 3.5,
      imageUrl: 'assets/food3.avif',
      tags: ['FastFood', 'paneer'],
    },
    {
      id:'4',
      name: 'Oats fruits bowl',
      price: 2,
      cookTime: '15-20',
      favorite: true,
      origins: ['belgium', 'france'],
      stars: 3.3,
      imageUrl: 'assets/food4.avif',
      tags: ['global', 'diet'],
    },
    {
      id:'5',
      name: 'baked veggis cheese',
      price: 11,
      cookTime: '40-50',
      favorite: false,
      origins: ['usa', 'asia'],
      stars: 3.0,
      imageUrl: 'assets/food5.avif',
      tags: [ 'vitamins'],
    },
    {
      id:'6',
      name: 'Vegetables Pizza',
      price: 9,
      cookTime: '40-50',
      favorite: false,
      origins: ['italy'],
      stars: 4.0,
      imageUrl: 'assets/food6.avif',
      tags: ['FastFood', 'Pizza', 'Lunch'],
    },
  ]
  
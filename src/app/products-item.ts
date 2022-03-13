export interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  rating: string;
}

export const products = [
  {
    id: 1,
    image:"https://m.media-amazon.com/images/I/611ovP2GkrL._AC_SX960_.jpg",
    name: 'IPhone 13 Pro Max',
    description: 'A large phone with one of the best screens',
    price: 1099,
    rating: "Rating: 10/10" ,
  },
  {
    id: 2,
    image:"url:https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.expansys.com.hk%2Fapple-iphone-13-pro-max-5g-dual-sim-256gb-sierra-blue-363610%2F&psig=AOvVaw0zoDp_Cpua4GhrlPE7E56y&ust=1647265200520000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDaq5ubw_YCFQAAAAAdAAAAABAD",
    name: 'IPhone 13 Pro',
    description: 'A great phone with one of the best cameras',
    price: 999,
    rating: "Rating: 9/10",
  },
  {
    id: 3,
    image:"url:https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.expansys.com.hk%2Fapple-iphone-13-pro-max-5g-dual-sim-256gb-sierra-blue-363610%2F&psig=AOvVaw0zoDp_Cpua4GhrlPE7E56y&ust=1647265200520000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDaq5ubw_YCFQAAAAAdAAAAABAD",
    name: 'IPhone 12',
    description: '',
    price: 829,
    rating: "Rating: 8/10",
  },
  /*
  {
    id: 4,

    name: 'IPhone 12',
    description: '',
    rating: 8 / 10,
  },
  {
    id: 5,
    name: 'IPhone 12',
    description: '',
    rating: 8 / 10,
  },
  {
    id: 6,
    name: 'IPhone 12',
    description: '',
    rating: 8 / 10,
  },
  {
    id: 7,
    name: 'IPhone 12',
    description: '',
    rating: 8 / 10,
  },
  {
    id: 8,
    name: 'IPhone 12',
    description: '',
    rating: 8 / 10,
  },
  {
    id: 9,
    name: 'IPhone 12',
    description: '',
    rating: 8 / 10,
  },
  {
    id: 10,
    name: 'IPhone 12',
    description: '',
    rating: 8 / 10,
  },
  */
];

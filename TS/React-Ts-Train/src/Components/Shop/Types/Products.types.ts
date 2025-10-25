export type Products = {
  id: number;
  title: string;
  price: number;
  descrption: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

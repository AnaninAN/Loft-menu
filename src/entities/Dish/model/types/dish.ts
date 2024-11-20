export interface Label {
  img?: string;
  text: string;
}

export interface Dish {
  id: string;
  imgSmall: string;
  imgBig: string;
  labels?: Label[];
  title: string;
  subtitle: string;
  price: string;
  descriptions: string[];
  compositions: string[];
}

export interface DishSchema {
  data?: Dish;
  isLoading?: boolean;
  error?: string;
}

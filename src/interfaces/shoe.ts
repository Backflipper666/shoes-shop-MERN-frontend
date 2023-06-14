export interface Shoe {
  _id: number;
  title: string;
  description: string;
  color: string;
  brand?: string;
  price: number;
  size: number;
  material?: string;
  stock: number;
  image: {
    contentType: string;
    data: {
      type: string;
      data: number[];
    };
  };
  image2?: {
    contentType: string;
    data: {
      type: string;
      data: number[];
    };
  };
  image3?: {
    contentType: string;
    data: {
      type: string;
      data: number[];
    };
  };
  image4?: {
    contentType: string;
    data: {
      type: string;
      data: number[];
    };
  };
  rating?: number;
  reviews?: Review[];
  createdAt?: Date;
  gender: 'men' | 'women' | 'kids';
  onSale?: boolean;
  discountPercent?: number;
  newCollection?: boolean;
  season?: 'summer' | 'winter' | 'demi';
}

export interface Review {
  username: string;
  comment: string;
}

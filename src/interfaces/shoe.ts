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
  rating?: number;
  reviews?: Review[];
  createdAt?: Date;
  gender: 'men' | 'women' | 'kids';
}

export interface Review {
  username: string;
  comment: string;
}

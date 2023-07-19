export interface Shoe {
  id: number; // Assuming 'id' is an auto-generated numeric field
  title: string;
  description: string;
  brand: 'FILA' | 'Nike' | 'Adidas' | 'Puma' | 'Other';
  price: number;
  old_price: number;
  color: string;
  size: number;
  material?: string;
  stock: Record<string, number>;
  image: string;
  image2: string;
  image3: string;
  image4: string;
  rating?: number | null;
  createdAt: Date;
  gender: 'men' | 'women' | 'kids';
  onSale: boolean;
  discountPercent: number;
  newCollection: boolean;
  season?: 'summer' | 'winter' | 'demi';
}

export interface Review {
  username: string;
  comment: string;
}

export interface CheckedFields {
  isOnSaleChecked: boolean;
  isNewCollectionChecked: boolean;
  isNikeChecked: boolean;
  isPumaChecked: boolean;
  isAdidasChecked: boolean;
  isFilaChecked: boolean;
  isForMenChecked: boolean;
  isForWomenChecked: boolean;
}

export interface ShoesState {
  list: Shoe[];
  loading: boolean;
  onSale: Shoe[];
  shoesToBeRendered: Shoe[];
  checkedFields: CheckedFields;
  priceRange: { min: number; max: number };
  server: string;
}

export interface User {
  email: string;
  token: string;
  cart: [];
  favorites: [];
}

export interface Image {
  contentType: string;
  data: { type: string; data: number[] };
}

export interface User {
  email: string;
  token: string;
}

export interface AllUsers {
  _id: string;
  cart: string[];
  email: string;
  favorites: string[];
}

export interface ShoeInCart extends Shoe {
  id: number;
  quantity: number;
  itemTotal: number;
  __v: number;
}

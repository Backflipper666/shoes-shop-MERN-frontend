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
}

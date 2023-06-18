// utils.ts
import { Shoe } from '../interfaces/shoe';

export function truncateString(
  str: string,
  maxCharacters: number = 60
): string {
  if (str.length <= maxCharacters) {
    return str;
  }

  return str.slice(0, maxCharacters) + '...';
}

export const filterShoes = (
  shoes: Shoe[],
  isOnSaleChecked: boolean,
  isNewCollectionChecked: boolean,
  isNikeChecked: boolean,
  isPumaChecked: boolean,
  isAdidasChecked: boolean,
  isFilaChecked: boolean,
  priceRange?: { min: number; max: number },
  isForMenChecked?: boolean,
  isForWomenChecked?: boolean
): Shoe[] => {
  let filteredShoes = shoes;

  if (isOnSaleChecked) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.onSale);
  }

  if (isNewCollectionChecked) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.newCollection);
  }
  if (priceRange) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.price >= priceRange.min && shoe.price <= priceRange.max
    );
  }

  if (isForMenChecked && !isForWomenChecked) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.gender === 'men');
  }
  if (!isForMenChecked && isForWomenChecked) {
    filteredShoes = shoes.filter((shoe) => shoe.gender === 'women');
  }

  if (isNikeChecked && !isPumaChecked && !isAdidasChecked && !isFilaChecked) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.brand === 'Nike');
  }

  if (!isNikeChecked && isPumaChecked && !isAdidasChecked && !isFilaChecked) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.brand === 'Puma');
  }

  if (!isNikeChecked && !isPumaChecked && isAdidasChecked && !isFilaChecked) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.brand === 'Adidas');
  }

  if (!isNikeChecked && !isPumaChecked && !isAdidasChecked && isFilaChecked) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.brand === 'FILA');
  }

  if (isNikeChecked && isPumaChecked && !isAdidasChecked && !isFilaChecked) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.brand === 'Nike' || shoe.brand === 'Puma'
    );
  }

  if (isNikeChecked && !isPumaChecked && isAdidasChecked && !isFilaChecked) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.brand === 'Nike' || shoe.brand === 'Adidas'
    );
  }

  if (isNikeChecked && !isPumaChecked && !isAdidasChecked && isFilaChecked) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.brand === 'Nike' || shoe.brand === 'FILA'
    );
  }

  if (!isNikeChecked && isPumaChecked && isAdidasChecked && !isFilaChecked) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.brand === 'Puma' || shoe.brand === 'Adidas'
    );
  }

  if (!isNikeChecked && isPumaChecked && !isAdidasChecked && isFilaChecked) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.brand === 'Puma' || shoe.brand === 'FILA'
    );
  }

  if (!isNikeChecked && !isPumaChecked && isAdidasChecked && isFilaChecked) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.brand === 'Adidas' || shoe.brand === 'FILA'
    );
  }

  if (isNikeChecked && isPumaChecked && isAdidasChecked && !isFilaChecked) {
    filteredShoes = filteredShoes.filter(
      (shoe) =>
        shoe.brand === 'Nike' ||
        shoe.brand === 'Puma' ||
        shoe.brand === 'Adidas'
    );
  }

  if (isNikeChecked && isPumaChecked && !isAdidasChecked && isFilaChecked) {
    filteredShoes = filteredShoes.filter(
      (shoe) =>
        shoe.brand === 'Nike' || shoe.brand === 'Puma' || shoe.brand === 'FILA'
    );
  }

  if (isNikeChecked && !isPumaChecked && isAdidasChecked && isFilaChecked) {
    filteredShoes = filteredShoes.filter(
      (shoe) =>
        shoe.brand === 'Nike' ||
        shoe.brand === 'Adidas' ||
        shoe.brand === 'FILA'
    );
  }

  if (!isNikeChecked && isPumaChecked && isAdidasChecked && isFilaChecked) {
    filteredShoes = filteredShoes.filter(
      (shoe) =>
        shoe.brand === 'Puma' ||
        shoe.brand === 'Adidas' ||
        shoe.brand === 'FILA'
    );
  }

  if (isNikeChecked && !isPumaChecked && !isAdidasChecked && isFilaChecked) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.brand === 'Nike' || shoe.brand === 'FILA'
    );
  }

  if (!isNikeChecked && isPumaChecked && !isAdidasChecked && isFilaChecked) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.brand === 'Puma' || shoe.brand === 'FILA'
    );
  }

  if (!isNikeChecked && !isPumaChecked && isAdidasChecked && isFilaChecked) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.brand === 'Adidas' || shoe.brand === 'FILA'
    );
  }

  if (isNikeChecked && isPumaChecked && isAdidasChecked && isFilaChecked) {
    filteredShoes = filteredShoes.filter(
      (shoe) =>
        shoe.brand === 'Nike' ||
        shoe.brand === 'Puma' ||
        shoe.brand === 'Adidas' ||
        shoe.brand === 'FILA'
    );
  }

  // Continue adding combinations of brand filters...

  return filteredShoes;
};

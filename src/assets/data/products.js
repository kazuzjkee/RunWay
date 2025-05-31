import data from './shoes.json';

const addIdAndGender = (products, gender) => {
  return products.map((product, index) => ({
    ...product,
    id: `${gender}-${index + 1}`,
    gender,
  }));
};

const allProducts = [
  ...addIdAndGender(data.man, 'man'),
  ...addIdAndGender(data.woman, 'woman'),
  ...addIdAndGender(data.kids, 'kids'),
];

export default allProducts;
import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../firebase/config';

export const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, 'stairs'));

  let products = [];
  querySnapshot.forEach((doc) => {
    products.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  return products;
};

export const getMultipleProducts = async (field, value) => {
  const q = query(collection(db, 'stairs'), where(field, '==', value));

  const querySnapshot = await getDocs(q);

  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return products;
};

import axios from 'axios';

export const getCategories = async () => {
  try {
    const { data } = await axios('/api/categories');
    return data.categories;
  } catch (error) {
    console.log(error);
  }
}
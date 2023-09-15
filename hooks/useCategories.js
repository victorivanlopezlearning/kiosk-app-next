import { useEffect, useState } from 'react';
import { getCategories } from '../helpers/getCategories';


export const useCategories = () => {

  const [categories, setCategories] = useState([])

  const getAllCategories = async () => {
    setCategories(await getCategories());
  }

  useEffect(() => {
    getAllCategories();
  }, [])

  return {
    categories
  }
}

import { getProductsApi } from '@/api/product';
import { useEffect, useState } from 'react'

function useProducts() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getProductsApi().then((res) => {
      setData(res.data.data);
      setIsLoading(false);
    }).catch(e => {
      setIsLoading(false);
    });
  }, []);
  

  return {
    data: data,
    isLoading: isLoading
  };
}

useProducts.propTypes = {}

export default useProducts

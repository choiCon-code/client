import { getAdminCategories } from '@/api/admin';
import { useEffect, useState } from 'react'

function useAdminCategories() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getAdminCategories().then((res) => {
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

useAdminCategories.propTypes = {}

export default useAdminCategories

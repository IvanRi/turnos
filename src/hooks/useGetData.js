/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
//hooks
import useIsMountedRef from './useIsMountedRef';

function useGetData(getFunction, needUpdate) {
  const [data, setData] = useState(null);
  const isMounted = useIsMountedRef();

  useEffect(() => {
    getAllTags()
  }, [needUpdate]);

  const getAllTags = async () => {
    const res = await getFunction()
    if (res.error) return console.log("Error:", res.error)
    isMounted.current && setData(res.result)
  };

  return data;
};

export default useGetData;

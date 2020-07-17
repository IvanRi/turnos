/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

function useGetData(updateFunction, refreshDataFunction, submit, onClose, aditionalParams) {
  const [error, setError] = useState(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    !!submit && _handleUpdate();
  }, [submit]);

  const _handleUpdate = async () => {
    // if (!validateEmptyInputs()) return setError('Todos los campos son requeridos')
    setError(null);
    setSending(true);
    const res = await updateFunction(aditionalParams);
    setSending(false);
    if (res.error) return setError(res.error);
    await refreshDataFunction();

    onClose();
  };

  return { error, sending };
};

export default useGetData;

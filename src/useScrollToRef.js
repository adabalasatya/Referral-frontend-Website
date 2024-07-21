import { useState } from 'react';

export const useScrollToRef = () => {
  const [refs, setRefs] = useState({});

  const setRef = (key, ref) => {
    setRefs((prevRefs) => ({
      ...prevRefs,
      [key]: ref,
    }));
  };

  return [refs, setRef];
};

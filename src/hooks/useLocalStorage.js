import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
    const [state, setState] = useState(localStorage.getItem(key) || initialValue);

    useEffect(() => {
      if (state !== null) {
        localStorage.setItem(key, state);
      }
    }, [key, state]);
  
    return [state, setState];
}

import { useEffect } from "react";
import { useRef } from "react";

export function useKeyDown(keyId, callback) {
  const ref = useRef(null);
  useEffect(() => {
    function handleKeydown(event) {
      if (event.key == keyId) {
        callback(ref.current);
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return ref;
}
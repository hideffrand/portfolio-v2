"use client"

import { useState, useEffect } from "react";

const useTypingEffect = (texts: string[], typingSpeed = 100, deletingSpeed = 50, delay = 2000) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), delay);
    } else if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      );
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts, typingSpeed, deletingSpeed, delay]);

  return texts[index].substring(0, subIndex);
};

export default useTypingEffect;

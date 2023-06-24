import { useState, useEffect } from "react";


function useTypingEffect(texts, delay) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      let timeout;
  
      const currentText = texts[currentIndex];
      const isComplete = displayedText === currentText;
  
      if (isComplete) {
        timeout = setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setDisplayedText("");
        }, 2000);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText((prevText) => {
            const nextCharIndex = prevText.length + 1;
            return currentText.substring(0, nextCharIndex);
          });
        }, delay);
      }
  
      return () => {
        clearTimeout(timeout);
      };
    }, [currentIndex, delay, displayedText, texts]);
  
    return displayedText;
  }
  

export default useTypingEffect;
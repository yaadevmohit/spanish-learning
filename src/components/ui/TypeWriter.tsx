import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 75,
  pauseTime = 2000,
}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentFullWord.substring(0, text.length + 1));
        if (text === currentFullWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(currentFullWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <div className="flex items-center justify-center bg-yellow-300 px-4 py-4 text-2xl font-bold min-h-16 md:min-h-28 max-w-[80%] md:text-6xl w-full text-center rounded-3xl">
      <span className="text-black drop-shadow-[-4px_-4px_0px_rgba(99,102,241,0.3)] wrap-break-word">
        {text}
      </span>
    </div>
  );
};

export default Typewriter;
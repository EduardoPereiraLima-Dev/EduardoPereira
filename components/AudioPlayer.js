import React from 'react';

const AudioPlayer = ({ src, name }) => {
  return (
    <div className="flex flex-col items-center my-8">
      <p className="text-lg font-bold mb-2">{name}</p>
      <audio controls>
        <source src={src} type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
};

export default AudioPlayer;

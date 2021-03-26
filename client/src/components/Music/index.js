import React from 'react';

function Music() {
  let audio = new Audio("/ES_Swell Metallic 5 - SFX Producer.mp3")

  const start = () => {
    audio.play()
  }

  return (
    < div >
      <button onClick={start}>Play</button>
    </div >
  );
}

export default Music;
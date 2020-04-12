import React, { useEffect, useState, useRef } from "react";
import AudioSpectrum from "react-audio-spectrum";
import { API_HOST } from "../config";

const PAUSED = 'PAUSED';
const PLAYING = 'PLAYING';

export default function PlayTrack() {
  const [audioStatus, setAudioStatus] = useState(PAUSED);
  const audioEle = useRef();
  const [url, setUrl] = useState(API_HOST + '/uploads/latest.webm');
  const [filename, setFilename] = useState('latest.webm');

  useEffect(() => {
    if (audioStatus === PAUSED) {
    fetch(API_HOST).then(async (resp) => {
      if (resp.ok) {
        let out = await resp.json();
        setFilename(out['name']);
        setUrl(API_HOST + '/uploads/' + out['name']);
      }
    })
    }
  }, [audioStatus]);

  useEffect(pauseWhenDone);
  function pauseWhenDone() {
    audioEle.current.addEventListener('pause', () => {
      setAudioStatus(PAUSED);
    });
  }

  const pause = () => {
    audioEle.current.pause();
    setAudioStatus(PAUSED);
  }
  const play = () => {
    audioEle.current.play();
    setAudioStatus(PLAYING);
  }

  return (
    <div>
      {
        audioStatus === PAUSED ? (
          <i onClick={play} className="iconfont icon-play">Play</i>
        ) : <i onClick={pause} className="iconfont icon-pause">Pause</i>
      }<br />
      <audio id="audio-element" autoPlay crossOrigin={"anonymous"} ref={audioEle} src={url} />
      <AudioSpectrum
        id="audio-canvas"
        height={200}
        width={300}
        audioId={'audio-element'}
        capColor={'red'}
        capHeight={2}
        meterWidth={2}
        meterCount={512}
        meterColor={[
          { stop: 0, color: '#f00' },
          { stop: 0.5, color: '#0CD7FD' },
          { stop: 1, color: 'red' }
        ]}
        gap={4}
      />
    </div>
  );
};

'use client'
import React, { useState,useRef ,useEffect} from 'react';
import Image from "next/image";
import CameraGif from '../assets/camera.gif'
import network from '../assets/network.webp'
import { ReactMic } from 'react-mic';
import annyang from 'annyang';
import WaveSurfer from 'wavesurfer.js';
const MicTest = (props) => {
  // *********************style*******************
  const style = {
    webchilebox: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between'
    },
    webcamTitle: {
      fontWeight: '600',
      fontSize: '20px'
    },
    BoxCamera: {
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      borderRadius: '10px',
      margin: 'auto',
      padding: '20px',
      width: '45%',

    },
    labeltext: {
      textAlign: 'center',
      fontWeight: '600',
      fontSize:'20px',
      color:'red'
    },
    labeltextC: {
      textAlign: 'center',
      fontWeight: '600',
      fontSize:'20px',
      color:'green'
    }


  };

  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [recognizedText, setRecognizedText] = useState('');
  const [synthesizedText, setSynthesizedText] = useState('');

  const wavesurferRef = useRef(null);
  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: wavesurferRef.current,
      waveColor: 'rgba(0, 0, 255, 0.3)',
      progressColor: 'blue',
      height: 100,
      barWidth: 2,
    });

    return () => wavesurfer.destroy();
  }, []);

  const onStopRecording = (recordedBlob) => {
    setIsRecording(false);
    setAudioURL(recordedBlob.blobURL);

    // Speech-to-text using Web Speech API
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setRecognizedText(transcript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    recognition.onend = () => {
      console.log('Speech recognition ended');
      synthesisText(recognizedText);
    };

    recognition.start();
  };

  const onSpeechRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setRecognizedText(transcript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    recognition.onend = () => {
      console.log('Speech recognition ended');
      synthesisText(recognizedText);
    };

    recognition.start();
  };

  const synthesisText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
    setSynthesizedText(text);
  };
  return (
    <div className='cameratestBox'>
      <div style={style.webchilebox}>
        <div>
          <label style={style.webcamTitle}>Mic Test</label>
        </div>
        <div>
          <button onClick={props.isclose} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Back</button>

        </div>
      </div>
      <div style={style.BoxCamera} className='BoxCamera'>
        <div>
      <div ref={wavesurferRef} />
      <ReactMic
        record={isRecording}
        onStop={onStopRecording}
        onStart={onStartRecording}
        strokeColor="#000000"
        backgroundColor="#FF4081" />
      <button onClick={onSpeechRecognition} disabled={isRecording}>
        {isRecording ? 'Recording...' : 'Start Speech Recognition'}
      </button>
      {audioURL && (
        <audio controls>
          <source src={audioURL} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      )}
      {recognizedText && (
        <p>Recognized Text: {recognizedText}</p>
      )}
      {synthesizedText && (
        <p>Synthesized Text: {synthesizedText}</p>
      )}
    </div>

      </div>

    </div>
  );
}

export default MicTest;
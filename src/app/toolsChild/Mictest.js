'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import CameraGif from '../assets/camera.gif'
import wave from '../assets/wave.gif'
import network from '../assets/network.webp'

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
      fontSize: '20px',
      color: 'red'
    },
    labeltextC: {
      textAlign: 'center',
      fontWeight: '600',
      fontSize: '20px',
      color: 'green'
    },

    micBox: {
      borderRadius: '15px',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      height: '212px',
      width: '100%',
      // background: '#1c2b71'
    },
    childBox: {
      fontSize: '95px'
    },
    waveButton: {
      justifyContent: 'center',
      display: 'flex'
    },
    wavespeekButton: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      width: '100%',
      flexDirection: 'column'
    }

  };
  // *****************stop*******************
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState(null);
  const [inputBox, setinputBox] = useState(false);
  const [errordevice, setErrordevice] = useState(false);

  useEffect(() => {
    // Initialize the Web Speech API
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = true; // Set to true if you want to show interim results
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          const transcriptPart = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcriptPart;
          } else {
            interimTranscript += transcriptPart;
          }
        }
        setTranscript(finalTranscript || interimTranscript);
      };

      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setErrordevice(true)
      };

      setRecognition(recognitionInstance);
    } else {
      console.error('SpeechRecognition API is not supported in this browser.');
    }
  }, []);

  const startListening = () => {
    if (recognition) {
      recognition.start();
      setListening(true);
      setinputBox(true)
      setTextToSpeak(transcript)
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setListening(false);
    }
  };
  const [textToSpeak, setTextToSpeak] = useState('');

  // Initialize speech recognition


  // Text to speech
  const handleSpeak = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-US';

    synth.speak(utterance);
  };

  const handlechangetext = (e) => {
    setTextToSpeak(e.target.value)

  }

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
        {
          errordevice ?
            <div style={{
              width: '100%', display: 'flex',
              justifyContent: 'center', flexDirection: 'column',
              alignItems: 'center',
              gap: '20px'
            }
            }>
              <div
                style={{
                  width: '60%',
                  display: 'flex',
                  justifyContent: 'center'

                }
                }>
                <Image src={network} width='100%' style={{ borderRadius: '10px', height: '200px' }} alt='img' />
              </div>
              <div>
                <p style={style.labeltext}>Oops...!</p>
                <p style={style.labeltext}>Device Not Found</p>
              </div>

            </div>
            :
            <div>
            <div>
              {
                listening ?
                  <div style={style.micBox}>
  
                    <Image src={wave} width='100%' style={{ borderRadius: '10px', height: '200px' }} alt='img' />
  
                  </div>
                  :
                  <div style={style.micBox} className='p3'>
                    <div style={style.childBox}>
                      <i className="fa fa-microphone" aria-hidden="true"></i>
                    </div>
                  </div>
              }
  
  
            </div>
            <br />
            <div style={style.waveButton}>
              <button onClick={startListening} disabled={listening} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 mb-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Start Listening</button>
              &nbsp;
              &nbsp;
              <button onClick={stopListening} disabled={!listening} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 mb-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Stop Listening</button>
  
            </div>
            {
              inputBox ?
                <div>
                  <div style={{ cursor: 'pointer', textAlign: 'right' }}>
                    <label className='p4' style={{ cursor: 'pointer' }} onClick={() => { setinputBox(false) }}>Back</label>
  
                  </div>
                  <div style={style.wavespeekButton}>
                    <div style={{ width: '100%' }}>
                      <textarea
                        style={{ width: '100%', borderRadius: '5px' }}
                        type="text"
                        className='p2'
                        rows="4"
                        cols="4"
                        value={textToSpeak}
                        onChange={handlechangetext}
                        placeholder="Enter text to speak"
                      ></textarea>
                    </div>
                    <div style={{
                      flexDirection: 'row',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <button
                        style={{
                          flexDirection: 'column',
                          display: 'flex',
                          alignItems: 'center'
                        }} className="flex justify-center rounded-md bg-indigo-600 px-3 mb-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSpeak}>
                        <i className="fa fa-volume-up" ></i>
                        <label>Speak</label>
                      </button>
  
                    </div>
  
                  </div>
                </div>
  
                : null
            }
  
            {/* *****************************next*********************** */}
          </div>
        }
      



      </div>

    </div>
  );
}

export default MicTest;
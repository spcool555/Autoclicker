'use client'
import React, { useState } from 'react';
import Webcam from 'react-webcam';
import Image from "next/image";
import CameraGif from '../assets/camera.gif'
import network from '../assets/network.webp'
const CameraTest = (props) => {
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
  const [isopencamera, setopencamera] = useState(false)
  const webcamRef = React.useRef(null);
  const [webcamAvailable, setWebcamAvailable] = useState(true);

  const handleUserMediaError = () => {
    console.log('Webcam not available');
    setWebcamAvailable(false);
  };

  const handleUserMedia = () => {
    console.log('Webcam available');
    setWebcamAvailable(true);
  };
  return (
    <div className='cameratestBox'>
      <div style={style.webchilebox}>
        <div>
          <label style={style.webcamTitle}>WebCam Test</label>
        </div>
        <div>
          <button onClick={props.isclose} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Back</button>

        </div>
      </div>
      <div style={style.BoxCamera} className='BoxCamera'>
        {
          isopencamera ?
            <div>
              {
                webcamAvailable ?
                  <div style={{  width: '100% !important',}}>
                    <div style={{display: 'flex',
    paddingBottom: '20px'}}>
                      <label style={style.labeltextC}>A web camera was detected. Press “Test my cam” to check the functionality and supported properties of your camera.</label>
                    </div>
                    <Webcam
                    style={{height:'300px',width:'100% !important'}}
                      audio={false}
                      ref={webcamRef}
                      width="100%"
                      onUserMediaError={handleUserMediaError}
                      onUserMedia={handleUserMedia}
                     
                      screenshotFormat="image/jpeg"
                    />

                  </div>
                  :
                  <div style={{
                    width: '100%', display: 'flex',
                    justifyContent: 'center',flexDirection: 'column',
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
                      <Image src={network} width='100%'  style={{borderRadius:'10px',height:'200px'}} alt='img' />
                    </div>
                    <div>
                      <p style={style.labeltext}>Oops...!</p>
                      <p style={style.labeltext}>Webcam not available</p>
                    </div>

                  </div>

              }


            </div>
            :
            <div className='BoxCamerachild'>
              <div style={{
                width: '100%', height: '300px', display: 'flex',
                justifyContent: 'center'
              }}>
                <Image src={CameraGif} width='100%' height='100%' alt='img' />
              </div>

            </div>
        }

        {
          !isopencamera ?
            <div>
              <br />
              <button
                onClick={() => { setopencamera(true) }}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 mb-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Check Webcam
              </button>
            </div>

            : null
        }

      </div>

    </div>
  );
}

export default CameraTest;
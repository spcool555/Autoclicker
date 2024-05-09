'use client'
import React, { useState } from 'react';
import Webcam from 'react-webcam';
import Image from "next/image";
import CameraGif from '../assets/camera.gif'
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

    }


  };
  const [isopencamera, setopencamera] = useState(false)
  const webcamRef = React.useRef(null);
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
              <div >
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  width="100%"
                  height="300px"
                  screenshotFormat="image/jpeg"
                />

              </div>

            </div>
            :
            <div className='BoxCamerachild'>
              <div style={{ width: '100%', height: '300px' }}>
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
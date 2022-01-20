
import './App.css';
// Import dependencies
import React, { useRef, useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./components/Camera/camera.css";
import { drawRect } from "./components/Camera/utilities";
import { CameraContext } from "./contexts/CameraContext";

const App = () => {
  const [detection, setDetection] = useState([]);
  const [webcamEnabled, setWebcamEnabled] = useState(true);
  const FACING_MODE_USER = "user";
  const FACING_MODE_ENVIRONMENT = "environment";
  const [facingMode, setFacingMode] = useState(FACING_MODE_ENVIRONMENT);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const videoConstraints = {
    facingMode: FACING_MODE_USER,
  };

  const handleClick = useCallback(() => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    );
  }, []);

  // Main function
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const runCoco = async () => {
    const net = await cocossd.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const obj = await net.detect(video);
      setDetection(obj);
      console.log('detection', detection);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx);
    }
  };

  useEffect(() => {
    detection.forEach(obj => obj.class === "sink" && setWebcamEnabled(false))
    runCoco();
  }, [runCoco, detection]);

  return (
    <CameraContext.Provider value={{ detection, setDetection, webcamEnabled, setWebcamEnabled }}>
      {webcamEnabled && (
        <>
      <Webcam
        ref={webcamRef}
        muted={true}
        className="webcamCapture"
        videoConstraints={{
          ...videoConstraints,
          facingMode,
        }}
      />
      <canvas ref={canvasRef} className="detection" />
      </>
      )}
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
        </Routes>
      </Router>
    </CameraContext.Provider>
  );
};

export default App;

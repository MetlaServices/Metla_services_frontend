import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";
import { Button, Input, Spin, message } from "antd";
import { LoadingOutlined, CameraOutlined, FlagOutlined } from "@ant-design/icons";

const AadharEntry: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [manualAadhar, setManualAadhar] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(false);
  const [isImageCaptured, setIsImageCaptured] = useState<boolean>(false);
  const [isFrontCamera, setIsFrontCamera] = useState<boolean>(true);
  const [isFlashlightOn, setIsFlashlightOn] = useState<boolean>(false);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setCapturedImage(imageSrc);
        setIsImageCaptured(true);
        setIsCameraOpen(false);
      } else {
        message.error("Failed to capture image. Please try again.");
      }
    } else {
      message.error("Webcam reference is not set.");
    }
  };

  const preprocessImage = (imageSrc: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Failed to get canvas context"));
          return;
        }

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          const threshold = 128; 
          const binaryValue = avg > threshold ? 255 : 0;
          data[i] = data[i + 1] = data[i + 2] = binaryValue; 
        }

        ctx.putImageData(imageData, 0, 0);
        resolve(canvas.toDataURL("image/png"));
      };

      img.onerror = () => {
        reject(new Error("Failed to load image"));
      };
    });
  };

  const scanImage = async () => {
    if (capturedImage) {
      setLoading(true);
      try {
        const preprocessedImage = await preprocessImage(capturedImage);
        const result = await Tesseract.recognize(preprocessedImage, "eng", {
          logger: (info: any) => console.log("OCR progress:", info),
        } as any);

        console.log("Full OCR result:", result.data.text);
        const foundNumbers = result.data.text.match(/\d+/g);
        console.log("Found numbers:", foundNumbers);

        if (foundNumbers) {
          const concatenatedNumbers = foundNumbers.join("");
          const aadharNumber = concatenatedNumbers.match(/\d{12}/);
          if (aadharNumber) {
            setManualAadhar(aadharNumber[0]);
            message.success("Aadhar number scanned successfully!");
          } else {
            message.error("No valid 12-digit number found. Please try again.");
          }
        } else {
          message.error("No numbers found. Please try again.");
        }
      } catch (error) {
        message.error("Error scanning image.");
      } finally {
        setLoading(false);
      }
    } else {
      message.error("No captured image to scan.");
    }
  };

  const toggleCamera = () => {
    setIsCameraOpen(!isCameraOpen);
    setCapturedImage(null);
    setIsImageCaptured(false);
  };

  const toggleCameraType = () => {
    setIsFrontCamera(!isFrontCamera);
  };

  const toggleFlashlight = () => {
    const videoTracks = (webcamRef.current?.video?.srcObject as MediaStream)?.getVideoTracks();

    if (videoTracks && videoTracks.length > 0) {
      const constraints: any = { // Cast to 'any' to allow custom properties
        advanced: [{ torch: !isFlashlightOn }]
      };

      videoTracks[0].applyConstraints(constraints)
        .then(() => setIsFlashlightOn(prev => !prev))
        .catch(err => {
          console.error("Error applying constraints:", err);
          message.error("Failed to toggle flashlight.");
        });
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg mx-auto max-w-md w-full">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Aadhar Number Entry</h1>

      <Input
        maxLength={12}
        placeholder="Enter 12-digit Aadhar number"
        value={manualAadhar}
        onChange={(e) => setManualAadhar(e.target.value)}
        className="text-lg p-2 rounded-md border border-gray-300 mb-4"
        style={{ backgroundColor: "#f7f7f7" }}
      />

      <div className="flex items-center w-full mb-4">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-gray-600 font-semibold">OR</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      {isCameraOpen && !isImageCaptured ? (
        <div className="relative w-full mb-4">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/png"
            width={320}
            height={140}
            videoConstraints={{ facingMode: isFrontCamera ? "user" : "environment" }}
            className="rounded-lg shadow-md mb-4"
          />
          <div className="flex justify-between">
            <Button
              type="primary"
              onClick={capture}
              className="flex-1 bg-blue-500 hover:bg-blue-600 transition duration-200 mr-2"
            >
              Capture
            </Button>
            <CameraOutlined
              onClick={toggleCameraType}
              className="text-gray-500 hover:text-gray-700 transition duration-200 cursor-pointer ml-2"
              style={{ fontSize: "32px" }}
            />
            <FlagOutlined
              onClick={toggleFlashlight}
              className={`text-gray-500 hover:text-gray-700 transition duration-200 cursor-pointer ml-2 ${isFlashlightOn ? "text-yellow-500" : ""}`}
              style={{ fontSize: "32px" }}
            />
          </div>
        </div>
      ) : (
        <>
          {capturedImage && (
            <div className="w-full h-40 relative mb-4">
              <img
                src={capturedImage}
                alt="Captured"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md border border-gray-200"
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
          {isImageCaptured && (
            <Button
              type="primary"
              onClick={scanImage}
              className="w-full bg-green-500 hover:bg-green-600 transition duration-200 mb-4 scanner-button"
              disabled={loading}
            >
              {loading ? <Spin indicator={antIcon} /> : "Scan Image"}
            </Button>
          )}
        </>
      )}

      <Button
        onClick={toggleCamera}
        className="mt-4 bg-gray-500 hover:bg-gray-600 transition duration-200"
      >
        {isCameraOpen ? "Close Camera" : "Open Camera"}
      </Button>
    </div>
  );
};

export default AadharEntry;

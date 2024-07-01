import { useEffect, useState } from "react";

const InitialPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set timeout to hide the popup after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-lg p-8 text-center max-w-md">
        <div className="flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="80"
            height="80"
            viewBox="0 0 48 48"
            className="mr-4"
          >
            <linearGradient
              id="infoGradient"
              x1="9.899"
              x2="38.183"
              y1="9.98"
              y2="38.264"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#33bef0"></stop>
              <stop offset="1" stopColor="#0a85d9"></stop>
            </linearGradient>
            <path
              fill="url(#infoGradient)"
              d="M44.041,24.122c0,11.045-8.955,20-20,20s-20-8.955-20-20s8.955-20,20-20	S44.041,13.077,44.041,24.122z"
            ></path>
            <path
              d="M22,36h4c0.552,0,1-0.448,1-1V20c0-0.552-0.448-1-1-1h-4c-0.552,0-1,0.448-1,1v15	C21,35.552,21.448,36,22,36z"
              opacity=".05"
            ></path>
            <path
              d="M22.227,35.5h3.547c0.401,0,0.727-0.325,0.727-0.727V20.227c0-0.401-0.325-0.727-0.727-0.727h-3.547	c-0.401,0-0.727,0.325-0.727,0.727v14.547C21.5,35.175,21.825,35.5,22.227,35.5z"
              opacity=".07"
            ></path>
            <radialGradient
              id="infoGradient2"
              cx="24"
              cy="16"
              r="5.108"
              gradientTransform="matrix(.7808 0 0 .7066 5.26 4.096)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".516"></stop>
              <stop offset="1" stopOpacity="0"></stop>
            </radialGradient>
            <ellipse
              cx="24"
              cy="15.402"
              fill="url(#infoGradient2)"
              opacity=".15"
              rx="3.988"
              ry="3.609"
            ></ellipse>
            <path
              fill="#fff"
              d="M24,17.732c1.7,0,2.65-1.068,2.65-2.388C26.65,14.024,25.647,13,24,13s-2.65,1.024-2.65,2.344	C21.35,16.664,22.3,17.732,24,17.732z"
            ></path>
            <rect width="4" height="15" x="22" y="20" fill="#fff"></rect>
          </svg>
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              Welcome to My Island!
            </h2>
            <p className="text-lg text-gray-700">
              Use{" "}
              <strong className="text-blue-500">&lt;</strong> and{" "}
              <strong className="text-blue-500">&gt;</strong> keyboard keys or
              mouse 🖱️ to navigate over the island.
            </p>
          </div>
        </div>
        <button
          onClick={handleClose}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default InitialPopup;
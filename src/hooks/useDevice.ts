import { useState, useEffect } from "react";

type DeviceType = "mobile" | "desktop";

export const useDevice = (): DeviceType => {
  const [device, setDevice] = useState<DeviceType>(() => {
    return window.innerWidth <= 768 ? "mobile" : "desktop";
  });

  useEffect(() => {
    const handleResize = () => {
      const newDevice = window.innerWidth <= 768 ? "mobile" : "desktop";
      if (newDevice !== device) {
        setDevice(newDevice);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [device]);

  return device;
};

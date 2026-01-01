"use client";

import { setDisclaimerViewed } from "@/shared/lib/localstorage/disclaimer/set-disclaimer-viewed";
import { getDisclaimerViewed } from "@/shared/lib/localstorage/disclaimer/get-disclaimer-viewed";
import { useEffect, useState } from "react";

export function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const wasViwed = getDisclaimerViewed();

    if (!wasViwed) {
      // eslint-disable-next-line
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setDisclaimerViewed();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative animate-in fade-in zoom-in duration-300">
        <div className="mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Welcome to CarMatch! 🚗
          </h2>
          <div className="w-16 h-1 bg-main rounded-full"></div>
        </div>

        <div className="space-y-4 text-gray-700 mb-6">
          <p className="text-base sm:text-lg leading-relaxed">
            This application uses the{" "}
            <a
              href="https://myauto.ge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-main font-semibold hover:underline"
            >
              MyAuto.ge
            </a>{" "}
            API to display car listings.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            <strong>Please note:</strong> We do not own, claim, or guarantee the
            accuracy of these listings. All car information, images, and prices
            are provided by MyAuto.ge and their respective sellers.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            For official information and to contact sellers, please visit{" "}
            <a
              href="https://myauto.ge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-main font-semibold hover:underline"
            >
              MyAuto.ge
            </a>
            .
          </p>
        </div>

        <button
          onClick={handleClose}
          className="w-full bg-main hover:bg-main-darker text-white font-semibold py-3 px-6 rounded-lg transition-colors cursor-pointer"
        >
          I Understand
        </button>
      </div>
    </div>
  );
}

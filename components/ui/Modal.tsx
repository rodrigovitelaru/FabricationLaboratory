import Image from "next/image";
import React, { useEffect } from "react";

interface ModalProps {
  onClose: () => void;
  content: {
    title: string;
    description: string;
    image?: string;
    secondaryImage?: string; // Adăugăm un câmp pentru a doua imagine
  } | null;
}

const Modal: React.FC<ModalProps> = ({ onClose, content }) => {
  if (!content) return null;

  useEffect(() => {
    // Previne mișcarea ecranului sus și jos
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg w-11/12 sm:w-1/2 lg:w-1/3 flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-white dark:bg-gray-900 backdrop-filter backdrop-blur-xl" />
        <h2 className="text-xl font-bold text-neutral-600 dark:text-white z-10">
          {content.title}
        </h2>
        <p className="text-neutral-500 dark:text-neutral-300 mt-2 z-10">
          {content.description}
        </p>
        {content.image && (
          <div className="flex flex-row items-center z-10">
            <Image
              src={content.image}
              width={500}
              height={500}
              alt={content.title}
              className="w-1/2 h-70 object-cover mt-4 rounded-md"
            />
            {content.secondaryImage && (
              <Image
                src={content.secondaryImage}
                width={500}
                height={500}
                alt={`${content.title} Secondary`}
                className="w-1/2 h-70 object-cover mt-4 rounded-md"
              />
            )}
          </div>
        )}
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg z-10"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

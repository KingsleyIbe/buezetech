'use client';

import React from 'react';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

const WhatsappWidget: React.FC = () => {
  const whatsappNumber = '2347030331929';
  const message = 'Hello! I need help with Bueze Tech Limited.';

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleClick}
        className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6"/>
      </button>
    </div>
  );
};

export default WhatsappWidget;

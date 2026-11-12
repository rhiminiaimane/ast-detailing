import React from 'react';
import styles from './ChatWidget.module.css';
import Image from 'next/image';

const ChatWidget: React.FC = () => {
  const phoneNumber = "212662038056";
  const message = "Bonjour Auto Spa Detailing, je souhaite prendre rendez-vous.";

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`}
      className={styles.whatsappFloat}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
    >
      <span className={styles.popupMessage} aria-hidden="true">Besoin d&apos;aide ?</span>
      <Image
        src="/icons/whatsapp-icon.png"
        alt=""
        width={42}
        height={42}
      />
    </a>
  );
};

export default ChatWidget;
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/Baxa-1998' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/baxtiyor-narziyev-a6600b2a3/' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/baxaxaxaxaxaxaxa?igsh=MXNjMjdnOXRleDA1dA==' },
  { icon: <FaTelegram />, path: 'https://t.me/Oxxxtentacion' },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
